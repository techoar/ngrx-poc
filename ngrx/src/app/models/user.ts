interface FullName {
    first: string;
    last: string;
}

interface OtherDetails {
    doj: string;
    dob: string;
    manager: string;
    companyName: string;
    designation: string;
}

enum UserStatus {
    INVITED = 'INVITED',
    REGISTERED = 'REGISTERED',
    APPROVED = 'APPROVED',
    TERMINATED = 'TERMINATED',
    REJECTED = 'REJECTED',
    DELETED = 'DELETED'
}

interface UserAccess {
    forever: boolean;
    fromDate: any;
    toDate: any;
}

enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPERADMIN = 'SUPERADMIN',
}

enum UserType {
    GUEST = 'GUEST',
    EMPLOYEE = 'EMPLOYEE',
}

export class User {
    id?: string;
    user_id?: string;
    type: UserType;
    role: UserRole;
    name?: FullName;
    gender?: string;
    image?: any;
    email: string;
    password?: string;
    employee_id?: string;
    phoneNumber?: string;
    otherDetails?: OtherDetails;
    status?: UserStatus;
    accessPoints?: any;
    access?: UserAccess;
    createdAt?: any;
    updatedAt?: any;
    editmode?: boolean;

    getFullName() {
        return this.name.first + ' ' + this.name.last;
    }

}
