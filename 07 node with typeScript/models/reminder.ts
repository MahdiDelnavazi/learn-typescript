export default class Reminder {
    id: number;
    isComplete: boolean;

    constructor(public title: string) {
        // set the id
        // and isComplete
        this.id = Date.now();
        this.isComplete = false;
    }
}