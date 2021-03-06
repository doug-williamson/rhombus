export enum IBacklogStatus {
    ON_DECK = 1,
    IN_PROGRESS = 2,
    DONE = 3,
}

export class IBacklog {
    text: string;
    status: IBacklogStatus;
}
