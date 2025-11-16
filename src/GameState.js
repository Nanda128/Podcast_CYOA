class GameState {
    constructor() {
        this.currentScenario = 0;
        this.companyHealth = 10.0;
        this.decisions = [];
        this.gameOver = false;
        this.showExplanation = false;
    }

    reset() {
        this.currentScenario = 0;
        this.companyHealth = 10.0;
        this.decisions = [];
        this.gameOver = false;
        this.showExplanation = false;
    }

    makeDecision(scenario, chosenOption, scenarioCount) {
        this.companyHealth = Math.max(0, Math.min(10, this.companyHealth + chosenOption.healthImpact));

        this.decisions.push({
            scenario: scenario.title,
            choice: chosenOption.text,
            impact: chosenOption.healthImpact,
            reasoning: chosenOption.reasoning,
            wasCorrect: chosenOption.isCorrect || false
        });

        this.showExplanation = true;
        this.gameOver = this.companyHealth === 0 || this.currentScenario === scenarioCount - 1;
    }

    nextScenario(scenarioCount) {
        if (this.currentScenario < scenarioCount - 1 && this.companyHealth > 0) {
            this.currentScenario++;
            this.showExplanation = false;
            return true;
        }
        return false;
    }

    getLastDecision() {
        return this.decisions.length > 0 ? this.decisions[this.decisions.length - 1] : null;
    }

    getCorrectCount() {
        return this.decisions.filter(d => d.wasCorrect).length;
    }

    getHealthColorClass() {
        if (this.companyHealth >= 7) return 'health-good';
        if (this.companyHealth >= 4) return 'health-warning';
        return 'health-critical';
    }

    getHealthStatus() {
        if (this.companyHealth >= 8) return 'Thriving';
        if (this.companyHealth >= 6) return 'Healthy';
        if (this.companyHealth >= 4) return 'Struggling';
        if (this.companyHealth >= 2) return 'Critical';
        if (this.companyHealth > 0) return 'Near Death';
        return 'Bankrupt';
    }
}

export default GameState;

