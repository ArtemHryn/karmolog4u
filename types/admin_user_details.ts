type PaymentStatus = 'APPROVED' | 'DECLINED' | 'PENDING';
export type ProductType = 'course' | 'practice' | 'Meditations' | 'Webinars' | 'GuidesAndBooks';

export interface PaymentsRow {
  status: PaymentStatus;
  id: string;
}

export type fetchedDataTypes = {
  productType: ProductType;
  rawResponse: { processingDate?: number };
  createdAt: Date;
  status: PaymentStatus;
  amount: number;
};
