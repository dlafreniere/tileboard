export interface IAppConfig {
    tiles: ITileConfig[],
    defaultTimeout?: number;
}

export interface ITileConfig {
    id: string;
    type: string;
    initialValue?: any;
    layout?: string;
    layoutProps?: any;
    props?: any;
}