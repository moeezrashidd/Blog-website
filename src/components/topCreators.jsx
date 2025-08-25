import React from 'react'

const TopCreators = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 mt-12">
            <Card className="rounded-2xl shadow-xl overflow-hidden">
                <img src="https://source.unsplash.com/1200x500/?technology,writing" alt="Featured" className="w-full h-72 object-cover" />
                <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">🌟 Featured Post: The Future of AI in Blogging</h3>
                    <p className="text-gray-600 mb-4">Explore how AI is changing the way we write, read, and interact with blogs.</p>
                    <Button className="rounded-full">Read More</Button>
                </CardContent>
            </Card>
        </section>
    )
}

export default TopCreators