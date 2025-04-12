export interface VisaRequirement {
  type: "visa_free" | "evisa" | "visa_required";
  duration?: number;
  evisaAvailable?: boolean;
  visaFreeEntry?: boolean;
  purpose?: string[];
  conditions?: string[];
  notes?: string[];
  officialLinks?: {
    ministry?: string;
  };
}

export interface Country {
  id: string;
  name: string;
  code?: string;
  region: string;
  visaRequirement: VisaRequirement;
  conditions?: string[];
  notes?: string[];
  officialLinks?: {
    mofa: string;
    k_eta?: string;
  };
  lastUpdated: string;
}

export const visaTypeDescriptions = {
  visa_free: "ビザ不要（入国時にパスポートのみで入国可能）",
  evisa: "電子ビザ必要（事前にオンラインでビザ申請が必要）",
  visa_required: "ビザ必要（大使館での申請が必要）",
};
