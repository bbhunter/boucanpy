export interface LoginForm {
    username: string;
    password: string;
}

export interface Message {
    type: string;
    text: string;
}

export interface User {
    id: number;
    email: string;
    created_at: number;
}

export interface ApiToken {
    id: number;
    scopes: string;
    is_active: boolean;
    dns_server_id: number;
    created_at: number;
}

export interface ApiTokenResponse {
    api_token: ApiToken;
    messages?: Message[];
    pagination?: object;
}

export interface ApiTokensResponse {
    api_tokens: ApiToken[];
    messages?: Message[];
    pagination?: object;
}

export interface ApiTokenCreateForm {
    scopes: string;
    expires_at: number;
    dns_server_id: number;
}

export interface SensitiveApiToken {
    id: number;
    token?: string | null;
    scopes: string;
    is_active: boolean;
    dns_server_id: number;
    created_at: number;
}

export interface SensitiveApiTokenResponse {
    api_token: SensitiveApiToken;
    messages?: Message[];
    pagination?: object;
}

export interface ZoneFormData {
    ip: string;
    domain: string;
    dns_server_id?: string;
}

export interface Zone {
    id: number;
    domain: string;
    ip: string;
    is_active: boolean;
    dns_server_id?: string;
    created_at: number;
}

export interface ZoneResponse {
    zone: Zone;
    messages?: Message[];
    pagination?: object;
}

export interface ZonesResponse {
    zones: Zone[];
    messages?: Message[];
    pagination?: object;
}

export interface ZoneCreateForm {
    domain: string;
    ip: string;
    dns_server_name?: string;
}

export interface DnsRequest {
    id: number;
    name: string;
    zone_id: number | null;
    source_address: string;
    source_port: number;
    type: string;
    protocol: string;
    dns_server_id: number;
    dns_server?: DnsServer;
    created_at: number;
}

export interface DnsRequestsResponse {
    dns_requests: DnsRequest;
    messages?: Message[];
    pagination?: object;
}

export interface UserResponse {
    user: User;
    messages?: Message[];
    pagination?: object;
}
export interface TokenPayload {
    sub: string;
    exp: string;
    scopes: string;
}

export interface DnsServer {
    id: number;
    name: string;
}

export interface DnsServerCreateForm {
    name: string;
}

export interface DnsServerResponse {
    dns_server: DnsServer;
    messages?: Message[];
}

export interface DnsServersResponse {
    dns_servers: DnsServer[];
    messages?: Message[];
    pagination?: object;
}

export interface DnsRecordForZoneCreateForm {
    record: string;
    sort: number;
}

export interface DnsRecordCreateForm {
    record: string;
    sort: number;
    zone_id: number;
}

export interface DnsRecord {
    id: number;
    record: string;
    sort: number;
    zone_id: number;
    zone?: Zone;
}

export interface DnsRecordResponse {
    dns_record: DnsRecord;
    messages?: Message[];
}

export interface DnsRecordsDigResponse {
    dig: string;
    messages?: Message[];
    pagination?: object;
}

export interface DnsRecordsResponse {
    dns_records: DnsRecord[];
    messages?: Message[];
    pagination?: object;
}

export interface Token {
    sub: string;
    exp: string;
    scopes: string[];
}
