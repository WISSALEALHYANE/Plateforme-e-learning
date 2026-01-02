import Link from "next/link";
import { Clock, Star, Users } from "lucide-react";
import { Course } from "../data/courses";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  const levelColor = {
    Débutant: "bg-success/10 text-success border-success/20",
    Intermédiaire: "bg-accent/10 text-accent border-accent/20",
    Avancé: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <article className="h-full bg-card rounded-2xl overflow-hidden card-hover border border-border/50">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent" />
          <Badge
            className={`absolute top-4 left-4 ${levelColor[course.level as keyof typeof levelColor]} border`}
          >
            {course.level}
          </Badge>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs font-medium text-primary-foreground/80 bg-primary/80 px-2 py-1 rounded-md">
              {course.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Instructor */}
          <p className="text-sm text-muted-foreground mb-4">
            Par <span className="font-medium text-foreground">{course.instructor}</span>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium text-foreground">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-2xl font-bold text-foreground">
              {course.price.toFixed(2)}€
            </span>
            <span className="text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
              Voir le cours →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CourseCard;