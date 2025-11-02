// Angular :- 
/*
Q. How to optimize the bundle size


Q. If your component is taking long to load how will you fix that

1. Avoid heavy work in constructor/ngOnInit (loops, big JSON parsing, sync computations).
2. Move CPU-heavy code to a Web Worker: ng g web-worker heavy
3. Defer “non-critical” features (charts/editors/maps) with dynamic import:
async ngAfterViewInit() {
  const { ChartComponent } = await import('./chart.component');
  // mount only when needed
}

4. Use Lazy load technique and stand alone 
5. For big lists, add trackBy:
6. Shrink & defer assets
7. Remove impure pipes


Q. Why MongoDB uses BSON instead of JSON
MongoDB stores data internally in BSON (Binary JSON) — not plain JSON. /
MongoDB uses BSON instead of JSON because BSON is a binary format that supports more data types, 
stores data faster, and improves database performance as well

JSON only supports:
1. String
2. Number
3. Boolean
4. Array
5. Object

BSON supports additional data types like:
1. Date
2. Binary (images/files)
3. ObjectId
3. Timestamp

Q. How to Store Images, Videos & Large Files in MongoDB

GridFS is a special MongoDB specification for storing and retrieving
large binary files such as images, videos, PDFs, audio, etc.

Q. What is profiling in mongodb
MongoDB profiling is used to monitor slow queries and performance issues.
It logs query execution details to the system.profile collection. 
Profiling has 3 levels: 0 (off), 1 (slow queries), and 2 (all operations).
We mainly use profiling to detect queries that need indexing or optimization

Q. Is Profiling Enabled by Default?
Profiling does not run by default in MongoDB
we must enable it manually using db.setProfilingLevel()



Q. Git Flow (Strict & Organized – Good for large teams)
1. main       (Production-ready code)
2. develop    (Integration of features for next release)
3. feature/*  (New features development)
4. bugfix/*   (Fixing bugs before release)
5. hotfix/*   (Quick fixes directly on production)

# Feature
git checkout -b feature/user-authentication

# Bugfix (pre-release)
git checkout -b bugfix/validation-error

# Hotfix (production issue)
git checkout -b hotfix/payment-crash

Branch layout (map to environments):-
1. main → prod
2. staging → staging
3. test → test
4. develop → dev
5. feature/*
6. hotfix/*
7. release/* (TAG) → hardening branches (optional; use if you batch releases)


Q. Software Architecture Patterns
1. Event Driven
2. Monolithic
3. MVC
4. Micro Service

*/