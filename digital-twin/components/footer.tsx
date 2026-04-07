export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dao Tuan Minh. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          Crafted with precision
        </p>
      </div>
    </footer>
  )
}
