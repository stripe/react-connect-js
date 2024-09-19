export type CollectionOptions = {
  fields: 'currently_due' | 'eventually_due';
  futureRequirements?: 'omit' | 'include';
};

export type FetchEphemeralKeyFunction = (fetchParams: {
  issuingCard: string;
  nonce: string;
}) => Promise<{
  issuingCard: string;
  nonce: string;
  ephemeralKeySecret: string;
}>;

export type FinancingProductType = {
  productType: 'standard' | 'refill' | 'none';
};

export type FinancingPromotionLayoutType = 'full' | 'banner';