const mapping: Record<string, string> = {
  organizations: 'organization',
  users: 'user',
  websites: 'website',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
