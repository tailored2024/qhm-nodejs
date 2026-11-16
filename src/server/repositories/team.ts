import "server-only";
import { teamMembers } from "@/content/team";
import { findAdjacent } from "@/lib/records";

export async function getTeamMembers() {
  return teamMembers;
}

export async function getTeamMemberById(id: string) {
  return teamMembers.find((record) => record.id === id);
}

export async function getTeamMemberWithAdjacent(id: string) {
  return findAdjacent(teamMembers, (record) => record.id === id);
}
