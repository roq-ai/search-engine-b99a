interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Marketing Specialist'],
  customerRoles: [],
  tenantRoles: ['Marketing Specialist'],
  tenantName: 'Organization',
  applicationName: 'search engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
