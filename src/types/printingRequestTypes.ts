// export interface PrintingSetupColorModeTypes {
//   _id: string;
//   printingSetupType: string;
//   price: number;
//   printingColorMode: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface PrintingSetupColorModeTypes {
//   _id: string;
//   printingSetupType: string;
//   price: number;
//   paperType: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface PrintingSetupPaperSizeTypes {
//   _id: string;
//   printingSetupType: string;
//   height: number;
//   width: number;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

export interface PrintingSetupTypes {
  _id: string;
  printingSetupType: string;
  price?: number;
  printingColorMode?: string;
  paperType?: string;
  height?: number;
  width?: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
