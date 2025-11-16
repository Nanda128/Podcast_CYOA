import GameState from './GameState.js';
import ScenarioData from './ScenarioData.js';
import UIHelper from './UIHelper.js';

class StartupGame {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`Container with id "${containerId}" not found`);
        }

        this.gameState = new GameState();
        this.scenarioData = new ScenarioData();

        this.render();
    }

    render() {
        if (this.gameState.gameOver) {
            this.renderGameOver();
        } else if (this.gameState.showExplanation) {
            this.renderExplanation();
        } else {
            this.renderScenario();
        }
    }

    renderScenario() {
        const scenario = this.scenarioData.getScenario(this.gameState.currentScenario);
        if (!scenario) {
            console.error('Scenario not found');
            return;
        }

        this.container.innerHTML = `
            <div class="game-card">
                ${this.renderHealthBar()}
                
                <div class="scenario-section">
                    <div class="scenario-header">
                        <h1 class="scenario-title">${UIHelper.escapeHtml(scenario.title)}</h1>
                        <span class="scenario-counter">
                            Scenario ${this.gameState.currentScenario + 1}/${this.scenarioData.getScenarioCount()}
                        </span>
                    </div>

                    <div class="scenario-content">
                        <p class="scenario-situation">${UIHelper.escapeHtml(scenario.situation)}</p>
                        <p class="scenario-question">${UIHelper.escapeHtml(scenario.question)}</p>
                    </div>
                </div>

                <div class="options-container">
                    ${scenario.options.map((option, idx) => `
                        <button class="option-button" data-option-index="${idx}">
                            <div class="option-content">
                                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                                <span class="option-text">${UIHelper.escapeHtml(option.text)}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>

                ${this.renderPreviousDecisions()}
            </div>
        `;

        this.attachOptionListeners();
    }

    renderExplanation() {
        const lastDecision = this.gameState.getLastDecision();
        if (!lastDecision) {
            console.error('No decision found');
            return;
        }

        const impactClass = UIHelper.getImpactClass(lastDecision.impact);
        const icon = lastDecision.impact >= 0 ? 'trending-up' : 'trending-down';

        this.container.innerHTML = `
            <div class="game-card">
                ${this.renderHealthBar()}

                <div class="explanation-box ${impactClass}">
                    <div class="explanation-header">
                        <div class="explanation-icon">
                            ${UIHelper.createIcon(icon, 24)}
                        </div>
                        <div>
                            <h3 class="explanation-title">
                                ${lastDecision.wasCorrect ? '✓ Optimal Decision' : 'Decision Impact'}: ${UIHelper.formatImpact(lastDecision.impact)}
                            </h3>
                            <p class="explanation-choice">You chose: ${UIHelper.escapeHtml(lastDecision.choice)}</p>
                        </div>
                    </div>

                    <div class="explanation-reasoning-box">
                        <p class="explanation-reasoning">${UIHelper.escapeHtml(lastDecision.reasoning)}</p>
                    </div>
                </div>

                ${this.gameState.companyHealth === 0 ? `
                    <div class="bankruptcy-notice">
                        <h3 class="bankruptcy-title">Company Bankrupt</h3>
                        <p class="bankruptcy-text">
                            Your company health has reached zero. Poor decisions have compounded, and your startup
                            has failed. Time to see what went wrong.
                        </p>
                    </div>
                ` : ''}

                <div class="button-container">
                    <button class="button-primary" id="nextButton" ${this.gameState.companyHealth === 0 ? 'disabled' : ''}>
                        ${this.gameState.currentScenario === this.scenarioData.getScenarioCount() - 1 ? 'See Final Results' : 'Continue to Next Scenario'}
                    </button>
                </div>

                <div class="scenario-progress">
                    Scenario ${this.gameState.currentScenario + 1} of ${this.scenarioData.getScenarioCount()}
                </div>
            </div>
        `;

        const nextButton = document.getElementById('nextButton');
        if (nextButton && this.gameState.companyHealth > 0) {
            nextButton.addEventListener('click', () => this.handleNextScenario());
        }
    }

    renderGameOver() {
        const correctCount = this.gameState.getCorrectCount();
        const finalScore = this.gameState.companyHealth;

        let alertClass, alertIcon, alertTitle, alertText;

        if (finalScore === 0) {
            alertClass = 'error';
            alertIcon = 'x-circle';
            alertTitle = 'Your Startup Failed';
            alertText = 'Your company health reached zero. Poor decisions compounded, burning through runway, damaging team morale, and destroying investor confidence. In the real world, this means layoffs, disappointed customers, and a very difficult conversation with everyone who believed in you.';
        } else if (finalScore >= 7) {
            alertClass = 'success';
            alertIcon = 'award';
            alertTitle = 'Strong Foundation Built';
            alertText = 'Your company is in excellent shape. Solid governance, sustainable practices, and smart resource management have positioned you well for growth. Investors see a professional operation. Keep this discipline as you scale.';
        } else {
            alertClass = 'warning';
            alertIcon = 'alert-circle';
            alertTitle = 'Surviving But Vulnerable';
            alertText = 'Your startup is still alive, but several poor decisions have weakened your foundation. You\'re burning runway faster than necessary, team morale is shaky, and investors are concerned. You need to course-correct quickly before minor problems become fatal.';
        }

        this.container.innerHTML = `
            <div class="game-card">
                <h1 class="game-over-title">
                    ${finalScore > 0 ? 'Journey Complete!' : 'Company Bankrupt'}
                </h1>

                <div class="game-over-stats">
                    <div class="game-over-score">
                        <span class="health-score ${this.gameState.getHealthColorClass()}">${finalScore.toFixed(1)}</span>
                        <span class="health-score-max">/10.0</span>
                    </div>
                    <div class="game-over-status">${this.gameState.getHealthStatus()}</div>
                    <div class="game-over-correct">
                        Optimal Decisions: ${correctCount}/${this.scenarioData.getScenarioCount()}
                    </div>
                </div>

                <div class="alert-box ${alertClass}">
                    <div class="alert-content">
                        <div class="alert-icon">
                            ${UIHelper.createIcon(alertIcon, 24)}
                        </div>
                        <div>
                            <h3 class="alert-title">${alertTitle}</h3>
                            <p class="alert-text">${alertText}</p>
                        </div>
                    </div>
                </div>

                <div class="journey-summary">
                    <h3 class="journey-title">Your Journey:</h3>
                    <div class="journey-list">
                        ${this.gameState.decisions.map(decision => `
                            <div class="journey-item ${UIHelper.getJourneyItemClass(decision.wasCorrect, decision.impact)}">
                                <div class="journey-item-header">
                                    <span class="journey-item-scenario">${UIHelper.escapeHtml(decision.scenario)}</span>
                                    <span class="journey-item-impact ${UIHelper.getImpactClass(decision.impact)}">
                                        ${UIHelper.formatImpact(decision.impact)}
                                    </span>
                                </div>
                                <div class="journey-item-choice">${UIHelper.escapeHtml(decision.choice)}</div>
                                ${decision.wasCorrect ? `
                                    <div class="journey-item-badge">
                                        ${UIHelper.createIcon('award', 14)} Optimal Choice
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="button-full" id="resetButton">
                    Start New Company
                </button>
            </div>
        `;

        const resetButton = document.getElementById('resetButton');
        if (resetButton) {
            resetButton.addEventListener('click', () => this.handleReset());
        }
    }

    renderHealthBar() {
        const healthClass = this.gameState.getHealthColorClass();
        const healthPercent = (this.gameState.companyHealth / 10) * 100;

        return `
            <div class="health-bar-section">
                <div class="health-bar-header">
                    <h2 class="health-bar-title">Company Health</h2>
                    <div class="health-bar-stats">
                        <div class="health-score ${healthClass}">
                            ${this.gameState.companyHealth.toFixed(1)}
                            <span class="health-score-max">/10.0</span>
                        </div>
                        <div class="health-status">${this.gameState.getHealthStatus()}</div>
                    </div>
                </div>
                <div class="health-bar-container">
                    <div class="health-bar-fill ${healthClass}" style="width: ${healthPercent}%"></div>
                </div>
            </div>
        `;
    }

    renderPreviousDecisions() {
        if (this.gameState.decisions.length === 0) {
            return '';
        }

        return `
            <div class="previous-decisions">
                <h3 class="previous-decisions-title">Previous Decisions:</h3>
                <div class="previous-decisions-list">
                    ${this.gameState.decisions.map(decision => `
                        <div class="decision-item">
                            <span class="decision-scenario">${UIHelper.escapeHtml(decision.scenario)}</span>
                            <span class="decision-impact ${UIHelper.getImpactClass(decision.impact)}">
                                ${UIHelper.formatImpact(decision.impact)}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    attachOptionListeners() {
        const buttons = this.container.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const optionIndex = parseInt(button.getAttribute('data-option-index'));
                this.handleChoice(optionIndex);
            });
        });
    }

    handleChoice(optionIndex) {
        const scenario = this.scenarioData.getScenario(this.gameState.currentScenario);
        if (!scenario) return;

        const chosenOption = scenario.options[optionIndex];
        if (!chosenOption) return;

        this.gameState.makeDecision(scenario, chosenOption, this.scenarioData.getScenarioCount());
        this.render();
    }

    handleNextScenario() {
        const moved = this.gameState.nextScenario(this.scenarioData.getScenarioCount());
        if (!moved) {
            this.gameState.gameOver = true;
        }
        this.render();
    }

    handleReset() {
        this.gameState.reset();
        this.render();
    }
}

export default StartupGame;

