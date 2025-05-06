import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel, SidebarGroupContent,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar"

import { Label } from "@/components/ui/label"
import { SidebarRail } from "@/components/ui/sidebar";
import { Story } from "@/app/teams/[team]/interfaces";

const stories: Story[] = [
    { id: "1", title: "Story-33", description: "Enhance the user authentication process for better UX." },
    { id: "2", title: "Story-19", description: "Implement a dark mode toggle for the application." },
    { id: "3", title: "Story-29", description: "Resolve the issue with failed transactions in the payment gateway." },
    { id: "4", title: "Story-11", description: "Improve the performance of the dashboard for faster load times." },
    { id: "5", title: "Story-9", description: "Allow users to upload profile pictures and update their information." },
    { id: "6", title: "Story-99", description: "Add real-time notifications for user activities." },
    { id: "7", title: "Story-130", description: "Clean up and organize the existing codebase for maintainability." },
    { id: "8", title: "Story-3", description: "Enable the application to support multiple languages." },
    { id: "9", title: "Story-21", description: "Implement additional security measures to protect user data." },
    { id: "10", title: "Story-None", description: "Design an onboarding experience for new users." }
];

export default function AppSidebar() {

    return (
        <>
            <Sidebar side="right" variant="floating">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Stories</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {stories.map((story) => (
                                    <SidebarMenuItem key={story.title}>
                                        <SidebarMenuButton asChild>
                                            <span>{story.title}</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    )
}