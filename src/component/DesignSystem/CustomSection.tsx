import { ReactNode, FC } from "react"

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export const CustomSection: FC<Props> = ({ children }) => {
  return (
    <section className="section">
      <div className="container">
        {children}
      </div>
    </section>
  )
}