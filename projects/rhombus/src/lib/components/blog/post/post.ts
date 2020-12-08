export interface IPostParagraph {
    id: number;
    text: string;
}

export interface IPost {
    id: number;
    timestamp: string;
    title: string;
    paragraphs: Array<IPostParagraph>[];
}