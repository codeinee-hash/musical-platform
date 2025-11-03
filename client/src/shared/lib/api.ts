import axios from "axios";
import {BASE_API_URL} from "@/shared/lib/const";

export const requester = axios.create({ baseURL: BASE_API_URL });
