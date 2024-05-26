"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function HomePage() {
  const cuisines: Array<String> = [
    "All",
    "American",
    "Asian",
    "Chinese",
    "Greek",
    "Indian",
    "Italian",
    "Japanese",
    "Korean",
    "Mexican",
  ];

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
     const response = await fetch("https://dummyjson.com/recipes");
     const data = await response.json();
     if(data) {
      // console.log(data);
      setRecipes(data.recipes);
     }
  };
  getRecipes()},[])


  // const recipes = [
  //   {
  //     id: 1,
  //     title: "Recipe 1",
  //     cuisine: "American",
  //   },
  //   {
  //     id: 2,
  //     title: "Sandwitch",
  //     cuisine: "Italian",
  //   }
  // ]

  return (
    <div>
      {cuisines.map((cuisine, idx) => {
        return <Badge key={`${cuisine}-${idx}`}>{cuisine}</Badge>;
      })}

      {recipes.map((recipe, idx) => 
      <Card key={`${recipe.id}-${idx}`}>
        <CardHeader>
          {/* img */}
        </CardHeader>
        <CardContent>
          <p>{recipe.title}</p>
        </CardContent>
        <CardFooter>
          <p>{recipe.cuisine}</p>
        </CardFooter>
      </Card>
      )}
    </div>
  );
}
