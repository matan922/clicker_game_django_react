export interface ClickerState {
    clicks: number;
    coins: number;
    workers: number;
    multip: number;
    cursors: {
        cursorCost: number;
        value: number;
    };
}