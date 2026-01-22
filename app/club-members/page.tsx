"use client"

import Link from "next/link"
import * as XLSX from "xlsx"

export default function ClubMembersPage() {
  const members = [
    { name: "Nitesh Kumar", roll: "21CSE001", dept: "CSE" },
    { name: "Rahul Sharma", roll: "21CSE002", dept: "CSE" },
    { name: "Anjali Verma", roll: "21IT005", dept: "IT" },
    { name: "Suman Reddy", roll: "21ECE010", dept: "ECE" },
  ]

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(members)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Club Members")
    XLSX.writeFile(workbook, "HackerRank_Club_Members.xlsx")
  }

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      
      {/* Back to Home */}
      <Link href="/" className="text-primary text-sm mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">
        Hacker Rank Club Members
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-muted">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Roll No</th>
              <th className="border px-4 py-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="text-center">
                <td className="border px-4 py-2">{m.name}</td>
                <td className="border px-4 py-2">{m.roll}</td>
                <td className="border px-4 py-2">{m.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Button */}
      <div className="text-center mt-8">
        <button
          onClick={downloadExcel}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Download Excel
        </button>
      </div>

    </section>
  )
}
