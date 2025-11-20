import BackButton from "@/components/course-comparison-sheet-generator/BackButton";
import CourseComparisonTool from "@/components/course-comparison-sheet-generator/CourseComparisonTool";
import HowToUse from "@/components/course-comparison-sheet-generator/HowToUse";

export default function CourseComparisonSheetGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Course Comparison Sheet Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Create a clear side-by-side comparison of two courses or plans (e.g., Basic vs. Premium) to help students and parents make informed decisions.
        </p>
      </div>

      <CourseComparisonTool />

      <HowToUse />
    </div>
  );
}
