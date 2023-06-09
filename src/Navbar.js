import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          React Accordion
        </Link>
        <ul>
          <CustomLink to="/example5">Example 1</CustomLink>
          <CustomLink to="/example6">Example 2</CustomLink>
        </ul>
      </nav>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }