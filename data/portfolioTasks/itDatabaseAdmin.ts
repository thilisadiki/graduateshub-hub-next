import type { PortfolioTask } from '@/types';

export const itDatabaseAdminTasks: PortfolioTask[] = [
  {
    id: 'it-db-backup-schedule',
    categoryId: 'it',
    topicId: 'it-database-admin',
    level: 'beginner',
    title: 'Database Backup Schedule & Restore Validation Plan',
    difficulty: 'Beginner',
    estimatedHours: '2 to 3 hours',
    tagline: 'Design a professional database backup routine and restore validation workflow for an e-commerce database.',
    scenario:
      'A Durban-based online retail website runs its shop on a PostgreSQL database. Currently, the developer runs manual backups only before launching new features, storing them on their own laptop. If the database crashes, gets corrupted, or hit by ransomware, the company could lose weeks of customer orders and billing history.',
    brief:
      'Create a systematic backup schedule, draft a bash/batch backup script using standard CLI tools, and write a restore testing procedure to verify backup integrity.',
    deliverables: [
      'A backup schedule matrix detailing frequency (Full, Incremental, and transaction/WAL logs), retention rules, and secure storage locations (applying offsite/cloud separation)',
      'A robust backup shell script or command set using standard utilities (e.g. pg_dump for PostgreSQL or mysqldump for MySQL) that incorporates timestamping and basic logging',
      'A step-by-step restore validation guide detailing how an administrator tests restoring the backup onto a staging environment, including table/data checking queries',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'A backup is only as good as its restore. Focus heavily on the validation guide. Explain how to verify that the restored database is structurally sound and data is uncorrupted.',
    rubric: [
      { key: 'schedule', label: 'Backup Routine Architecture', description: 'Is the backup strategy (Full/Incremental/Logs) robust, secure, and appropriate for transaction-heavy e-commerce?', weight: 35 },
      { key: 'script', label: 'Automation & Script Quality', description: 'Is the backup script functional, parameterized, and includes file naming conventions with timestamps?', weight: 35 },
      { key: 'validation', label: 'Restore Verification', description: 'Is the validation process comprehensive, with clear checks for database consistency, record counts, and connection testing?', weight: 30 },
    ],
    skillsProven: ['Database backup strategies', 'SQL backup utilities', 'Bash/shell scripting for DBs', 'Restore validation protocols'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-db-access-audit',
    categoryId: 'it',
    topicId: 'it-database-admin',
    level: 'intermediate',
    title: 'Database Access Control & Privilege Remediation Audit',
    difficulty: 'Intermediate',
    estimatedHours: '3 to 4 hours',
    tagline: 'Audit user privileges on a production database and design a least-privilege SQL role structure under POPIA.',
    scenario:
      'An e-commerce firm in Johannesburg has grown quickly and experienced team changes. An internal scan reveals dozens of active database accounts: several junior developers have superuser (DBA) access to the production server, customer service staff have raw SELECT privileges on the user table containing plain-text passwords and banking data, and old employee accounts remain active.',
    brief:
      'Perform an access audit. Create a role-based access control matrix, design a remediation plan to clean up old accounts, and write a SQL script to establish least-privilege roles.',
    deliverables: [
      'A Database Privilege Matrix (markdown table) defining logical roles (DBA, Developer, CS Agent, Report Reader) and their allowed operations (SELECT, INSERT, UPDATE, etc.) on specific schemas',
      'An account cleanup and audit playbook outlining how to discover stale users, rotate credentials, and restrict direct database access under POPIA requirements',
      'A SQL code template containing DDL commands (CREATE ROLE, GRANT, REVOKE) to implement the role segregation, including schema isolation and password complexity constraints',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Under POPIA Principle 7 (Security Safeguards), you must restrict access to sensitive PII (banking/ID numbers) to only those who strictly need it. Make sure your role design prevents customer support agents from viewing sensitive data or exporting raw client lists.',
    rubric: [
      { key: 'matrix', label: 'Privilege Matrix Design', description: 'Is the role-based access control (RBAC) model secure, logical, and appropriate for safeguarding sensitive data?', weight: 35 },
      { key: 'remediation', label: 'Cleanup Playbook & POPIA', description: 'Is the account remediation workflow thorough, address credential rotation, and align with POPIA Principles?', weight: 35 },
      { key: 'sql', label: 'SQL Role Implementation', description: 'Are the DDL SQL statements syntax-valid, properly structure roles, and use appropriate GRANT/REVOKE commands?', weight: 30 },
    ],
    skillsProven: ['Database access governance', 'Role-based access control (RBAC)', 'POPIA database compliance', 'SQL privilege administration'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
  {
    id: 'it-db-performance-incident',
    categoryId: 'it',
    topicId: 'it-database-admin',
    level: 'advanced',
    title: 'Database Performance Diagnosis & Slow Query Optimization',
    difficulty: 'Advanced',
    estimatedHours: '5 to 7 hours',
    tagline: 'Audit database performance, diagnose a slow-query CPU spike, and optimize SQL execution paths.',
    scenario:
      'A Pretoria financial services firm has an internal CRM database. Every morning at 09:00, when staff generate reporting dashboards, database CPU spikes to 100%, causing app-wide timeouts. The IT manager needs a senior DBA to diagnose the cause, optimize the bottleneck query, and establish an index and maintenance strategy to keep the server running smoothly.',
    brief:
      'Produce a database performance diagnostic playbook, document the optimization of a complex slow-query scenario using SQL indices, and design a database maintenance policy.',
    deliverables: [
      'A diagnostic playbook detailing commands (e.g. EXPLAIN ANALYZE, pg_stat_activity, or process monitoring) to isolate the CPU-heavy queries and table locks',
      'A query optimization case study showing a before-and-after SQL rewrite (e.g., optimizing subqueries to JOINs, removing wildcard SELECT *, or correcting data type mismatches) and the exact CREATE INDEX statements needed',
      'A database maintenance policy document outlining routine operations like statistics updates (ANALYZE), table vacuuming/defragmentation, and index rebuild schedules',
      'A database monitoring dashboard specification defining 5 key metrics (e.g. buffer cache hit ratio, index scan vs sequential scan ratio, lock wait times) to watch',
    ],
    deliverableFormat: 'markdown',
    submissionGuidance:
      'Ensure the query optimization is technically sound. Use realistic SQL syntax. Explain exactly how the query optimizer\'s execution plan changes (from a sequential scan to an index scan) once the index is applied.',
    rubric: [
      { key: 'diagnosis', label: 'Diagnostic Playbook', description: 'Does the playbook show deep technical expertise in tracing lock contention, high CPU, and slow logs?', weight: 25 },
      { key: 'optimization', label: 'Query & Index Tuning', description: 'Is the SQL query optimization logically sound, and does the index explanation show understanding of execution plans (EXPLAIN)?', weight: 30 },
      { key: 'maintenance', label: 'Maintenance Governance', description: 'Are the routine database maintenance schedules realistic and prevent index fragmentation and table bloat?', weight: 25 },
      { key: 'monitoring', label: 'Dashboard & Telemetry', description: 'Are the chosen database telemetry metrics correct and useful for alerting on early degradation?', weight: 20 },
    ],
    skillsProven: ['Database performance tuning', 'SQL query optimization (EXPLAIN)', 'Index administration & maintenance', 'Database diagnostic utilities'],
    relatedRoadmapIds: ['it-support-specialist'],
  },
];
