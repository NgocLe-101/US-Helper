import { Link } from "react-router"
import { Button } from "./components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"
import { Menu } from "lucide-react"
import { Input } from "./components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"

function App() {
    const trendingCourses = [
        { code: "CS101", name: "Introduction to Programming", rating: "4.8" },
        { code: "MATH202", name: "Linear Algebra", rating: "4.5" },
        { code: "BIO110", name: "Cell Biology", rating: "4.2" },
    ];
    return (
        <div className="min-h-screen">
            {/* Navigation Bar */}
            <nav className="sticky top-0 bg-white shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex text-2xl font-bold text-primary">
                                <img src="/favicon.png" alt="Logo" className="h-8 mr-2" />
                                US-Helper
                            </Link>
                            <div className="hidden md:block ml-10">
                                <div className="flex space-x-4">
                                    <Button variant="ghost" asChild className="text-primary hover:bg-gray-100">
                                        <Link to="/courses">Courses</Link>
                                    </Button>
                                    <Button variant="ghost" className="text-primary hover:bg-gray-100">
                                        Resources
                                    </Button>
                                    <Button variant="ghost" className="text-primary hover:bg-gray-100">
                                        Community
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger>
                                    <Menu className="h-6 w-6 text-primary" />
                                </SheetTrigger>
                                <SheetContent side="left">
                                    <div className="flex flex-col space-y-4 mt-4">
                                        <Button variant="ghost">Courses</Button>
                                        <Button variant="ghost">Resources</Button>
                                        <Button variant="ghost">Community</Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Your HCMUS Study Companion</h1>
                    <p className="text-xl mb-8">Access course materials, discussions, and student resources</p>

                    <div className="max-w-2xl mx-auto">
                        <Input
                            placeholder="Search for courses (e.g., CS101, Calculus...)"
                            className="rounded-full bg-white/10 border-none text-white placeholder:text-white/80"
                        />
                    </div>

                    <div className="mt-8 flex justify-center gap-4">
                        <Button variant="secondary" className="rounded-full px-8">
                            Explore Courses
                        </Button>
                        <Button variant="outline" className="rounded-full px-8">
                            Contribute
                        </Button>
                    </div>
                </div>
            </div>

            {/* Trending Courses Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-primary mb-8">Trending Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trendingCourses.map((course) => (
                        <Card key={course.code} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-start">
                                    <div>
                                        <div className="text-primary">{course.code}</div>
                                        <div className="text-lg font-semibold">{course.name}</div>
                                    </div>
                                    <Badge variant="outline" className="text-primary">
                                        ★ {course.rating}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" className="w-full text-primary">
                                    View Resources
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-primary text-white mt-20 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">US-Helper</h3>
                            <p className="text-sm opacity-80">
                                Independent study platform for HCMUS students
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="#" className="hover:underline">About</Link></li>
                                <li><Link to="#" className="hover:underline">Contact</Link></li>
                                <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm opacity-80 italic">
                                Not affiliated with HCMUS. Student-contributed content only.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
