"use client"

import { useAuthStore } from "@/store/authStore"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const login = useAuthStore((state) => state.login)

  const handleLogin = () => {
    if (id === "mandoo" && pw === "mandoothelove") {
      login()
      router.push("/")
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.")
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 border border-slate-200 rounded shadow-2xl ">
      <h2 className="text-2xl font-semibold mb-4">로그인</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        로그인
      </button>
    </div>
  )
}
