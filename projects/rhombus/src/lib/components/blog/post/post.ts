export interface IPostParagraph {
    id: number;
    text: string;
}

export interface IPost {
    id: number;
    timestamp: any;
    title: string;
    paragraphs: Array<IPostParagraph>[];
}
