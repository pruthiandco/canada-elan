"use client"

import { useState, useRef, useCallback } from "react"
import { X, Lock, LayoutDashboard, LogOut, UploadCloud, Check } from "lucide-react"
import type { Product } from "@/lib/products"

type Props = {
  open: boolean
  onClose: () => void
  products: Product[]
  onUpdate: (products: Product[]) => void
}

export function AdminPanel({ open, onClose, products, onUpdate }: Props) {
  const [authed, setAuthed] = useState(false)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center bg-foreground/50 backdrop-blur-sm">
      <div className="relative flex w-full max-w-6xl flex-col overflow-hidden bg-background shadow-2xl sm:my-6 sm:max-h-[calc(100vh-3rem)] sm:rounded-md">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Close admin panel"
        >
          <X className="size-5" />
        </button>

        {authed ? (
          <Dashboard products={products} onUpdate={onUpdate} onLogout={() => setAuthed(false)} />
        ) : (
          <LoginView onSuccess={() => setAuthed(true)} />
        )}
      </div>
    </div>
  )
}

function LoginView({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "admin") {
      setError("")
      onSuccess()
    } else {
      setError("Invalid credentials. Try admin / admin.")
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center p-8 py-16">
      <form onSubmit={submit} className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="size-5" />
          </div>
          <h2 className="font-serif text-3xl font-medium text-foreground">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm font-light text-muted-foreground">
            Sign in to manage the Canada Élan storefront.
          </p>
        </div>

        <label className="mb-4 block">
          <span className="mb-1.5 block text-xs font-medium tracking-[0.15em] text-foreground/70 uppercase">
            Username
          </span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
            placeholder="admin"
            autoComplete="off"
          />
        </label>
        <label className="mb-6 block">
          <span className="mb-1.5 block text-xs font-medium tracking-[0.15em] text-foreground/70 uppercase">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
            placeholder="••••••"
          />
        </label>

        {error && (
          <p className="mb-4 text-sm text-primary">{error}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-sm bg-primary px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Sign In
        </button>
        <p className="mt-4 text-center text-xs font-light text-muted-foreground">
          Demo credentials — admin / admin
        </p>
      </form>
    </div>
  )
}

function Dashboard({
  products,
  onUpdate,
  onLogout,
}: {
  products: Product[]
  onUpdate: (p: Product[]) => void
  onLogout: () => void
}) {
  const [selectedId, setSelectedId] = useState(products[0]?.id)
  const [saved, setSaved] = useState(false)

  const selected = products.find((p) => p.id === selectedId) ?? products[0]

  const patch = (changes: Partial<Product>) => {
    onUpdate(products.map((p) => (p.id === selected.id ? { ...p, ...changes } : p)))
    setSaved(false)
  }

  const save = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <LayoutDashboard className="size-5 text-primary" />
          <div>
            <h2 className="font-serif text-xl font-medium leading-none text-foreground">
              Content Manager
            </h2>
            <p className="mt-1 text-xs font-light text-muted-foreground">
              Edit product details & imagery
            </p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          <LogOut className="size-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
        {/* Product list */}
        <aside className="shrink-0 overflow-y-auto border-b border-border md:w-64 md:border-b-0 md:border-r">
          <nav className="flex gap-2 overflow-x-auto p-3 md:flex-col md:gap-1">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`flex shrink-0 items-center gap-3 rounded-sm px-3 py-2.5 text-left transition-colors md:w-full ${
                  p.id === selected.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                <img
                  src={p.image || "/placeholder.svg"}
                  alt=""
                  className="size-9 shrink-0 rounded-sm object-cover"
                />
                <span className="whitespace-nowrap text-sm font-medium md:whitespace-normal">
                  {p.name}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Editor */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ImageUploader
              image={selected.image}
              onImage={(dataUrl) => patch({ image: dataUrl })}
            />

            <div className="space-y-5">
              <Field
                label="Product Name"
                value={selected.name}
                onChange={(v) => patch({ name: v })}
              />
              <Field
                label="Tagline"
                value={selected.tagline}
                onChange={(v) => patch({ tagline: v })}
              />
              <Field
                label="Detail Badge"
                value={selected.detail}
                onChange={(v) => patch({ detail: v })}
              />
              <Field
                label="System Steps"
                value={selected.steps}
                onChange={(v) => patch({ steps: v })}
              />
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium tracking-[0.15em] text-foreground/70 uppercase">
                  Description
                </span>
                <textarea
                  value={selected.description}
                  onChange={(e) => patch({ description: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-sm border border-input bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
                />
              </label>

              <button
                onClick={save}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                {saved ? (
                  <>
                    <Check className="size-4" /> Saved to Preview
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
              <p className="text-center text-xs font-light text-muted-foreground text-pretty">
                Changes update the live preview instantly. Connect a database
                later to persist across sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium tracking-[0.15em] text-foreground/70 uppercase">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
      />
    </label>
  )
}

function ImageUploader({
  image,
  onImage,
}: {
  image: string
  onImage: (dataUrl: string) => void
}) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(
    (file: File | undefined) => {
      if (!file || !file.type.startsWith("image/")) return
      const reader = new FileReader()
      reader.onload = () => onImage(reader.result as string)
      reader.readAsDataURL(file)
    },
    [onImage],
  )

  return (
    <div>
      <span className="mb-1.5 block text-xs font-medium tracking-[0.15em] text-foreground/70 uppercase">
        Product Image
      </span>
      <div
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          handleFile(e.dataTransfer.files?.[0])
        }}
        onClick={() => inputRef.current?.click()}
        className={`group relative flex aspect-4/5 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm border-2 border-dashed transition-colors ${
          dragging ? "border-primary bg-primary/5" : "border-input bg-muted"
        }`}
      >
        <img
          src={image || "/placeholder.svg"}
          alt="Product preview"
          className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-30"
        />
        <div className="relative flex flex-col items-center gap-2 rounded-sm bg-background/80 px-5 py-4 text-center opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <UploadCloud className="size-6 text-primary" />
          <span className="text-xs font-medium tracking-wide text-foreground">
            Drag & drop or click to upload
          </span>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  )
}
