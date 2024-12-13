"use client";

import React, { useState, useEffect } from "react";
import Card from "@/app/dashboard/component/coursecard";
import Dropdown from "@/app/dashboard/component/dropdown";

interface TopicDropdownItem {
  label: string;
  description: string;
}

interface ClassData {
  id?: string;
  subject: string;
  title: string;
  time: string;
  teacherName: string;
  teacherRole: string;
  teacherImage: string;
  cardImage: string;
  subjectColor: string;
  content: string[];
  topicDropdowns: {
    [key: string]: { 
      title: string; 
      items: TopicDropdownItem[] 
    }
  };
}

const DetailClassesPage: React.FC = () => {
  const [classDetails, setClassDetails] = useState<ClassData | null>(null);
  const [activeTab, setActiveTab] = useState<"course" | "participants">("course");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const classes: ClassData[] = [
    {
      subject: "Matematika",
      title: "Beginner's Guide to becoming a professional frontend developer",
      time: "Monday, 10:00 AM - 12:00 PM",
      teacherName: "Prashant Kumar Singh",
      teacherRole: "Teacher",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#9E77ED",
      content: [
        "Introduction to Variables",
        "Basic Algebra Techniques",
        "Understanding Graphs",
        "Problem Solving Strategies",
      ],
      topicDropdowns: {
        "Introduction to Variables": {
          title: "Variables Explained",
          items: [
            { 
              label: "What are Variables?", 
              description: "Variables are containers for storing data values. In programming and mathematics, they represent a symbolic name for a value that can change." 
            },
            { 
              label: "Variable Types", 
              description: "Explore different types of variables including integers, floating-point numbers, strings, and boolean values. Each type has unique properties and use cases." 
            }
          ]
        },
        "Basic Algebra Techniques": {
          title: "Algebra Foundations",
          items: [
            { 
              label: "Linear Equations", 
              description: "Learn how to solve linear equations using various methods like addition, subtraction, multiplication, and division of both sides." 
            },
            { 
              label: "Algebraic Expressions", 
              description: "Understand how to simplify and manipulate algebraic expressions by combining like terms and applying distribution properties." 
            }
          ]
        },
        "Understanding Graphs": {
          title: "Graph Visualization",
          items: [
            { 
              label: "Coordinate Systems", 
              description: "Dive deep into Cartesian coordinate systems, learning how to plot points, understand axes, and read graph coordinates." 
            },
            { 
              label: "Graphing Functions", 
              description: "Master the art of graphing different types of mathematical functions including linear, quadratic, and exponential functions." 
            }
          ]
        },
        "Problem Solving Strategies": {
          title: "Strategic Problem Solving",
          items: [
            { 
              label: "Analytical Thinking", 
              description: "Develop critical thinking skills by breaking down complex problems into smaller, manageable steps and applying logical reasoning." 
            },
            { 
              label: "Mathematical Reasoning", 
              description: "Learn systematic approaches to solving mathematical challenges, including pattern recognition and logical deduction." 
            }
          ]
        }
      }
    },
    {
      subject: "Fisika",
      title: "Understanding the basics of Quantum Mechanics",
      time: "Tuesday, 2:00 PM - 4:00 PM",
      teacherName: "Dr. John Doe",
      teacherRole: "Professor",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#F59E0B",
      content: [
        "Newton's Laws of Motion",
        "Fundamentals of Thermodynamics",
        "Quantum State Basics",
        "Experimental Physics Techniques",
      ],
      topicDropdowns: {
        "Newton's Laws of Motion": {
          title: "Fundamental Laws of Motion",
          items: [
            { 
              label: "First Law of Motion", 
              description: "Understand the concept of inertia and how objects maintain their state of motion unless acted upon by an external force." 
            },
            { 
              label: "Second and Third Laws", 
              description: "Explore the relationships between force, mass, and acceleration, and the principle of action and reaction." 
            }
          ]
        },
        // Add similar dropdowns for other topics
        "Fundamentals of Thermodynamics": {
          title: "Heat and Energy Principles",
          items: [
            { 
              label: "First Law of Thermodynamics", 
              description: "Learn about energy conservation and the relationship between heat, work, and internal energy." 
            },
            { 
              label: "Entropy and Heat Transfer", 
              description: "Understand the concept of entropy and how heat moves between different systems." 
            }
          ]
        }
      }
    },
    {
      subject: "Kimia",
      title: "Introduction to Organic Chemistry",
      time: "Wednesday, 3:00 PM - 5:00 PM",
      teacherName: "Jane Smith",
      teacherRole: "Lecturer",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#EAB308",
      content: [
        "Chemical Bonding Concepts",
        "Organic Compound Reactions",
        "Safety in Chemistry Labs",
        "Understanding Molecular Structures",
      ],
      topicDropdowns: {
        "Chemical Bonding Concepts": {
          title: "Understanding Chemical Bonds",
          items: [
            { 
              label: "Ionic Bonds", 
              description: "Learn about the transfer of electrons between atoms to form ionic bonds." 
            },
            { 
              label: "Covalent Bonds", 
              description: "Explore how atoms share electrons to form covalent bonds and build stable molecules." 
            }
          ]
        },
        "Organic Compound Reactions": {
          title: "Key Reactions in Organic Chemistry",
          items: [
            { 
              label: "Substitution Reactions", 
              description: "Understand how substitution reactions occur in organic compounds." 
            },
            { 
              label: "Elimination Reactions", 
              description: "Learn how elimination reactions produce double bonds in organic molecules." 
            }
          ]
        },
        "Safety in Chemistry Labs": {
          title: "Safety Practices",
          items: [
            { 
              label: "Chemical Handling", 
              description: "Learn safe practices for handling and storing chemicals in the lab." 
            },
            { 
              label: "Lab Equipment Usage", 
              description: "Understand how to safely use lab equipment like beakers and Bunsen burners." 
            }
          ]
        },
        "Understanding Molecular Structures": {
          title: "Molecular Structures",
          items: [
            { 
              label: "Lewis Structures", 
              description: "Learn to draw Lewis structures to represent molecular structures and bonding." 
            },
            { 
              label: "3D Molecular Models", 
              description: "Explore how molecular geometry is represented in 3D models." 
            }
          ]
        }
      }
    },
    {
      subject: "Biologi",
      title: "Exploring the Wonders of Human Anatomy",
      time: "Friday, 9:00 AM - 11:00 AM",
      teacherName: "Dr. Emily White",
      teacherRole: "Lecturer",
      teacherImage: "/images/profilvideo.png",
      cardImage: "/images/bannervideo.png",
      subjectColor: "#22C55E",
      content: [
        "Introduction to Cell Biology",
        "Human Skeletal System",
        "Functions of Human Organs",
        "Understanding Genetics",
      ],
      topicDropdowns: {
        "Introduction to Cell Biology": {
          title: "Cell Biology Fundamentals",
          items: [
            { 
              label: "Cell Structure", 
              description: "Explore the components of cells, including the nucleus, mitochondria, and more." 
            },
            { 
              label: "Cell Function", 
              description: "Learn about the essential functions cells perform to sustain life." 
            }
          ]
        },
        "Human Skeletal System": {
          title: "The Framework of the Body",
          items: [
            { 
              label: "Bones and Joints", 
              description: "Understand the structure and function of bones and joints in the human body." 
            },
            { 
              label: "Skeletal Diseases", 
              description: "Learn about common skeletal diseases like osteoporosis and arthritis." 
            }
          ]
        },
        "Functions of Human Organs": {
          title: "Organ Systems and Their Roles",
          items: [
            { 
              label: "Cardiovascular System", 
              description: "Explore how the heart and blood vessels transport nutrients and oxygen." 
            },
            { 
              label: "Digestive System", 
              description: "Understand how the digestive system processes food and absorbs nutrients." 
            }
          ]
        },
        "Understanding Genetics": {
          title: "Genetic Principles",
          items: [
            { 
              label: "DNA Structure", 
              description: "Learn about the double helix structure of DNA and its role in genetics." 
            },
            { 
              label: "Genetic Inheritance", 
              description: "Understand how traits are passed from parents to offspring through genes." 
            }
          ]
        }
      }
    }
    
    // You can add more classes with similar structures
  ];

  useEffect(() => {
    const indexParam = new URLSearchParams(window.location.search).get("index");
    if (indexParam !== null) {
      const index = parseInt(indexParam, 10);
      if (index >= 0 && index < classes.length) {
        setClassDetails(classes[index]);
      }
    } else {
      setClassDetails(classes[0]); // Set the first class as default
    }
  }, []);

  if (!classDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 bg-white">
        Class not found
      </div>
    );
  }

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8 bg-white">
        {/* Banner */}
        <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] mb-8">
          <img
            src={classDetails.cardImage}
            alt="Class Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Class Info */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-6">
          <span
            className="inline-block text-sm sm:text-base px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: classDetails.subjectColor }}
          >
            {classDetails.subject}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {classDetails.title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base">
            <strong>Class Time:</strong> {classDetails.time}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={classDetails.teacherImage}
              alt="Teacher"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
            />
            <div>
              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                {classDetails.teacherName}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {classDetails.teacherRole}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mt-8">
          <nav className="flex space-x-4">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "course"
                  ? "text-primary-50 border-b-2 border-primary-50"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("course")}
            >
              Course
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "participants"
                  ? "text-primary-50 border-b-2 border-primary-50"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("participants")}
            >
              Participants
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "course" ? (
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="col-span-3 p-6 space-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {classDetails.subject} Topics
                </h3>
                {classDetails.content.map((topic, index) => (
                  <Card
                    key={index}
                    title={topic}
                    isActive={selectedTopic === topic}
                    onClick={() => handleTopicSelect(topic)}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="col-span-9 bg-gray-50 rounded-lg p-6 shadow-md">
                {selectedTopic ? (
                  classDetails.topicDropdowns[selectedTopic] ? (
                    <Dropdown
                      title={classDetails.topicDropdowns[selectedTopic].title}
                      items={classDetails.topicDropdowns[selectedTopic].items}
                    />
                  ) : (
                    <div className="text-center text-gray-500 py-10">
                      No details available for this topic
                    </div>
                  )
                ) : (
                  <div className="text-center text-gray-500 py-10">
                    Select a topic to view more details
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-700">Participants content will be added soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailClassesPage;