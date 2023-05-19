const Blogs = () => {
    return (
        <div className='text-center mx-2'>
            <h1 className='text-warning text-5xl mb-3'>My Q&A Blog</h1>
            <div className='border border-warning p-2 mb-2 rounded'>
                <h2 className='text-info text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>Access tokens and refresh tokens are components used in token-based authentication systems. An access token is a short-lived credential that grants access to protected resources. It is included in each request for authentication and authorization. A refresh token is a long-lived credential used to obtain a new access token once it expires, without requiring the user to re-authenticate.</p>
                <p>Access tokens are stored securely on the client-side using mechanisms like local storage, session storage, or cookies. Refresh tokens should be stored in HTTP-only cookies to enhance security and prevent client-side access. It is crucial to prioritize security when handling tokens and follow best practices to protect user authentication and authorization.</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded'>
                <h2 className='text-info text-2xl'>Compare SQL and NoSQL databases?</h2>
                <p>SQL and NoSQL databases differ in terms of data model, scalability, query language, data consistency, and use cases.</p>
                <p>SQL databases have a rigid, structured schema and predefined relationships between tables. They are vertically scalable and use SQL as the query language. SQL databases prioritize strong data consistency and are suitable for structured data and complex querying.</p>
                <p>NoSQL databases have a flexible or schema-less data model, allowing for agile data structures. They are horizontally scalable, distributing data across multiple servers. NoSQL databases use various query languages specific to their data model. They prioritize availability and partition tolerance over strong consistency and are suitable for unstructured or semi-structured data and high scalability.</p>
                <p>The choice between SQL and NoSQL depends on factors such as the nature of the data, scalability needs, desired data consistency, and the specific requirements of the application.</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded'>
                <h2 className='text-info text-2xl'>What is express js? What is Nest JS?</h2>
                <p>Express.js is a lightweight and flexible web application framework for Node.js, offering a minimalist approach to building web servers and APIs. It provides the essential features needed to handle HTTP requests, routing, and responses, giving developers the freedom to design the application structure as they prefer. On the other hand, Nest.js is a TypeScript-based framework inspired by Angular's architecture, focusing on modularity, maintainability, and testability. It follows a structured approach with modules, controllers, and services, and provides additional features like dependency injection and validation. Nest.js is well-suited for larger-scale applications that require a more opinionated and organized codebase. The choice between Express.js and Nest.js depends on factors such as project size, desired level of structure, scalability needs, and developer preferences.</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded'>
                <h2 className='text-info text-2xl'>What is MongoDB aggregate and how does it work?</h2>
                <p>The MongoDB aggregation framework is a powerful tool that allows for advanced data processing and analysis within MongoDB collections. It works through a series of stages in a pipeline, where each stage performs specific operations on the data and passes the results to the next stage. The stages include matching, projection, grouping, sorting, limiting, and skipping, among others. Additionally, aggregation operators offer various functionalities like arithmetic calculations, array manipulations, and joining with other collections. With the aggregation framework, complex queries, transformations, and aggregations can be performed directly within the database, enabling efficient data processing, analytics, and insights extraction without extensive application layer processing.</p>
            </div>
        </div>
    );
};

export default Blogs;