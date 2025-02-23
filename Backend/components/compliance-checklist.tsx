import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function ComplianceChecklist({ project }) {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "pending":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "in progress":
        return <AlertCircle className="h-5 w-5 text-blue-500" />
      default:
        return <XCircle className="h-5 w-5 text-red-500" />
    }
  }

  return (
    <ul className="space-y-2">
      {project.compliance.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          {getStatusIcon(item.status)}
          <span>{item.name}</span>
          <span className="text-sm text-muted-foreground">({item.status})</span>
        </li>
      ))}
    </ul>
  )
}

