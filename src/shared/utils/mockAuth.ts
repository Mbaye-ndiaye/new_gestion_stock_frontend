export const mockUser = {
  id: "1",
  name: "Ibrahima Sory",
  email: "ibrahima.sory@Tgateway.com",
  role: "admin",
  avatar: null,
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString()
}

export const mockPermissions = {
  admin: [
    "dashboard:read",
    "products:read",
    "products:create",
    "products:update",
    "products:delete",
    "stock:read",
    "stock:update",
    "sales:read",
    "sales:create",
    "reports:read",
    "users:read",
    "users:create",
    "users:update",
    "users:delete"
  ],
  employee: [
    "dashboard:read",
    "products:read",
    "stock:read",
    "stock:update",
    "sales:read",
    "sales:create",
    "reports:read"
  ]
}

export const hasPermission = (userRole: string, permission: string): boolean => {
  const permissions = mockPermissions[userRole as keyof typeof mockPermissions] || []
  return permissions.includes(permission)
}
