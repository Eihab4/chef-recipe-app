/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkDown from 'react-markdown'
interface IClaudeProps{
    recipe:string
}
export function Claude(props: IClaudeProps) {
    console.log(props)
    return (
        <>
            <section style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#333", borderBottom: "2px solid #ddd", paddingBottom: "5px" }}>Your Recipe</h2>
            <ReactMarkDown
                components={{
                    h3: ({ ...props }) => <h3 style={{ color: "#555", marginTop: "15px" }} {...props} />,
                    ul: ({ node, ...props }) => <ul style={{ listStyleType: "disc", marginLeft: "20px" }} {...props} />,
                    li: ({ node, ...props }) => <li style={{ marginBottom: "5px" }} {...props} />,
                    p: ({ node, ...props }) => <p style={{ lineHeight: "1.6", marginBottom: "10px" }} {...props} />,
                }}
            >
                {props.recipe}
            </ReactMarkDown>
        </section> 
        </>
    )
}