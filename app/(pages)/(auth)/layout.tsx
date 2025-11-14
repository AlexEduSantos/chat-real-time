export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
      {children}
    </div>
  );
}
