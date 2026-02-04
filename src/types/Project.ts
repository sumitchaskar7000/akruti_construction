export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export interface Project {
    id: string;
    title: string;
    status: ProjectStatus;
    location: string;
    image: string;
    description: string;
    link: string;
    specifications: {
        area: string;
        units: string;
        type: string;
        amenities: string[];
    };
}
