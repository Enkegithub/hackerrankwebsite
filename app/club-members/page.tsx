"use client"

import Link from "next/link"
import * as XLSX from "xlsx"

export default function ClubMembersPage() {
  const members = [
    { name: "Newton Adhikari", Position: "President", dept: "CSE" },
    { name: "Kishore Voodi", Position: "Vice President", dept: "CSE" },
    { name: "Pushpa Bhandari", Position: "Secretary(GIRLS)", dept: "CSE" },
    { name: "Shreetirth Talpallikar", Position: "Secretary(BOYS)", dept: "CSE" },
    { name: "Pranshu Choudhary", Position: " Treasurer", dept: "CSE" },
    { name: "Nitesh Kushwaha", Position: "Technical Head", dept: "CSE" },
    { name: "Jangam Ashwik", Position: "Social Media Head ", dept: "CSE" },
    { name: "Sathish", Position: "Creative head", dept: "CSE" },
    { name: "Bishal Bista", Position: " Student Repesentative(BOYS)", dept: "CSE" },
    { name: "Yepuri Neha", Position: " Student Repesentative(GIRLS)", dept: "CSE" }, 
    { name: "R.Srinivasulu", Position: " Event Coordinator", dept: "CSE" },
    { name: "A.Rishik Reddy", Position: "Event Coordinator", dept: "CSE" },
    { name: "T.Praveen Reddy", Position: "Event Coordinator", dept: "CSE" },
    { name: " S.Vishwashree", Position: "Event Coordinator", dept: "CSE" },
    {name: " Vemula Vigneshwari", Position: "Event Coordinator", dept: "CSE" },
    {name: "Sai Varshith", Position: "Event Coordinator", dept: "CSE" },
    {name: " Sama Usha Reddy", Position: "Event Coordinator", dept: "CSE" },
    {name: " Krishanu choudhary", Position: "Designer", dept: "CSE" },
    {name: "Ansh Mohatta", Position: "Designer", dept: "CSE" },
    {name: " Ravi Yadav", Position: "Tech-Member", dept: "CSE" },
    {name: "Afroj Alam", Position: "Tech-Member", dept: "CSE" },
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
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="text-center">
                <td className="border px-4 py-2">{m.name}</td>
                <td className="border px-4 py-2">{m.Position}</td>
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
