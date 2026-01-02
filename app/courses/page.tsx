"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import { searchCourses } from "@/data/courses";

function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredCourses = useMemo(
    () => searchCourses(searchQuery, selectedCategory),
    [searchQuery, selectedCategory]
  );

  return (
   <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tous nos cours
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez notre catalogue complet et trouvez le cours parfait pour développer vos compétences.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Results Count */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredCourses.length}</span> cours trouvés
              {selectedCategory !== "Tous" && (
                <span> dans <span className="font-medium text-accent">{selectedCategory}</span></span>
              )}
              {searchQuery && (
                <span> pour "<span className="font-medium text-foreground">{searchQuery}</span>"</span>
              )}
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-fade-up">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucun cours trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;