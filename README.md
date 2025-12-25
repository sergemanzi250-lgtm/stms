# School Automatic Timetable Management System

A production-ready, multi-tenant school timetable management system built with Next.js 14, TypeScript, and PostgreSQL.

## 🚀 Features

### Core Functionality
- **Multi-tenant Architecture**: Support for multiple schools on a single platform
- **Role-based Access Control**: Super Admin, School Admin, and Teacher roles
- **School Approval Workflow**: Schools must be approved by Super Admin before activation
- **Automatic Timetable Generation**: Advanced algorithm with priority-based scheduling
- **Manual Timetable Editing**: Visual editor with clash detection
- **Teacher Assignment Management**: Many-to-many relationships for flexible assignments

### School Types Support
- **Primary Schools**: Standard subject-based timetable generation
- **Secondary Schools**: Extended subject periods and advanced scheduling
- **TSS (TVET) Schools**: Module-based system with category priorities

### Advanced Scheduling Features
- **TSS Module Prioritization**:
  - Specific Modules (highest priority) - scheduled in morning
  - General Modules (medium priority) - scheduled after specific modules
  - Complementary Modules (lowest priority) - fill remaining gaps
- **Teacher Workload Control**: Maximum 2 consecutive periods rule
- **Conflict Detection**: Automatic identification of scheduling conflicts
- **Continuous Block Allocation**: For practical TSS modules

### Technical Features
- **Authentication**: NextAuth.js with secure role-based authentication
- **Database**: PostgreSQL with Prisma ORM
- **UI/UX**: Responsive design with Tailwind CSS
- **Export**: PDF and Excel export functionality
- **Print Support**: Print-friendly timetable formats

## 🏗️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with credentials provider
- **UI Components**: Custom components with Lucide React icons
- **Validation**: Zod for schema validation
- **Security**: bcryptjs for password hashing

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## ⚙️ Installation & Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd school-timetable-management

# Install dependencies
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/school_timetable_db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# (Optional) Seed the database
npm run db:seed
```

### 4. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to access the application.

## 👥 User Roles & Workflows

### 1. Super Admin
- **Responsibilities**:
  - Approve or reject school registrations
  - Activate/deactivate schools
  - Monitor all schools on the platform
  - System-wide analytics and reporting

- **Access**: Full platform control
- **Registration**: Pre-configured in database

### 2. School Admin
- **Responsibilities**:
  - Register teachers/trainers (cannot self-register)
  - Create and manage classes
  - Create subjects (Primary/Secondary) or modules (TSS)
  - Assign multiple subjects/modules to teachers
  - Generate and edit timetables
  - Manage school-specific settings

- **Access**: School-specific data only
- **Registration**: Self-registration with approval workflow

### 3. Teacher/Trainer
- **Responsibilities**:
  - View personal timetable only
  - Access assigned subjects/modules

- **Access**: Personal timetable dashboard
- **Registration**: Only by School Admin

## 🏫 School Registration Process

1. **School Admin Registration**:
   - Complete registration form with school details
   - System creates pending school record
   - School Admin account created but inactive

2. **Super Admin Approval**:
   - Super Admin reviews pending registrations
   - Approve or reject school applications
   - Approved schools become active

3. **School Activation**:
   - School Admin can now sign in
   - Begin setting up teachers, classes, and subjects

## 🎯 Timetable Generation Logic

### Priority System (TSS Schools)
1. **Morning Periods**:
   - Specific modules (highest priority)
   - General modules (medium priority)

2. **Afternoon Periods**:
   - High-hour subjects/modules
   - Complementary modules (gap filling)

### Teacher Workload Rules
- Maximum 2 consecutive periods per teacher
- Automatic break insertion after consecutive periods
- Teachers can teach different classes and subjects daily

### Conflict Resolution
- **Teacher Conflicts**: Same teacher assigned to multiple classes
- **Class Conflicts**: Multiple lessons in same time slot
- **Availability Conflicts**: Teacher or class unavailable

## 📊 Database Schema

### Core Models
- **School**: Multi-tenant school information
- **User**: Authentication and role management
- **Class**: School classes and grades
- **Subject**: Primary/Secondary subjects with periods
- **Module**: TSS modules with categories and hours
- **TimeSlot**: Configurable time periods
- **Timetable**: Generated schedule entries

### Relationship Models
- **TeacherSubject**: Many-to-many teacher-subject assignments
- **TrainerModule**: Many-to-many trainer-module assignments  
- **ClassSubject**: Class-subject associations

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signin` - User authentication
- `POST /api/auth/signup` - School registration

### School Management
- `GET /api/schools` - List schools (Super Admin)
- `POST /api/schools` - Register new school
- `PUT /api/schools/[id]/approve` - Approve/reject school

### Teacher Management
- `GET /api/teachers` - List teachers (School Admin)
- `POST /api/teachers` - Create teacher
- `PUT /api/teachers/[id]` - Update teacher
- `DELETE /api/teachers/[id]` - Delete teacher

### Timetable Management
- `POST /api/generate` - Generate timetable
- `GET /api/timetables` - Get timetables
- `PUT /api/timetables/[id]` - Update timetable entry

### Subject/Module Management
- `GET /api/subjects` - List subjects
- `POST /api/subjects` - Create subject
- `GET /api/modules` - List modules
- `POST /api/modules` - Create module

## 🎨 UI Components

### Authentication Pages
- **Sign In**: Single login page for all roles
- **Sign Up**: School registration with approval workflow

### Dashboards
- **Super Admin Dashboard**: School approval and monitoring
- **School Admin Dashboard**: School management and timetable generation
- **Teacher Dashboard**: Personal timetable view

### Timetable Views
- **Weekly Grid**: Days × Periods visualization
- **Teacher View**: Individual teacher schedules
- **Class View**: Class-specific timetables
- **Export Options**: PDF and Excel generation

## 🔒 Security Features

- **Role-based Access Control**: Strict role enforcement
- **School Data Isolation**: Multi-tenant data separation
- **Password Security**: bcrypt hashing
- **Session Management**: NextAuth.js secure sessions
- **Input Validation**: Zod schema validation
- **SQL Injection Protection**: Prisma ORM parameterized queries

## 🚀 Deployment

### Production Environment Setup

1. **Database**: Set up PostgreSQL in production
2. **Environment Variables**: Configure production environment
3. **Build**: `npm run build`
4. **Start**: `npm run start`

### Recommended Deployment Platforms
- **Vercel**: Seamless Next.js deployment
- **Railway**: Database and application hosting
- **AWS**: Full cloud infrastructure
- **DigitalOcean**: VPS deployment

## 📈 Performance Optimizations

- **Database Indexing**: Optimized queries for large datasets
- **Lazy Loading**: Component-level code splitting
- **Caching**: API response caching where appropriate
- **Pagination**: Efficient data loading for large tables

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the API endpoints

## 🎯 Future Enhancements

- **Mobile App**: React Native companion app
- **Advanced Analytics**: Detailed scheduling insights
- **Integration**: Calendar app integrations
- **Bulk Operations**: Mass teacher/subject management
- **Advanced Reporting**: Comprehensive analytics dashboard
- **API Documentation**: OpenAPI/Swagger documentation

---

Built with ❤️ for educational institutions worldwide.