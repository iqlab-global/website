# Sanity Data Export and Import Guide

_Please note: this guide is specified for Sanity Free-tier plan. When using Enterprise plan this approach would be replaced by [Sanity hot-swap feature](https://www.sanity.io/docs/content-lake/how-to-use-hot-swapping-for-datasets), which is more safe and efficient for the functionality we want to achieve._

### Prerequisites

- Sanity CLI installed globally: `npm install -g sanity`
- User is logged into Sanity.io via terminal: `npx sanity login`
- Sanity Project ID is set into `NEXT_PUBLIC_SANITY_PROJECT_ID` environmental variable inside `.env.local` file. _Project ID can be found on Sanity.io IQ Lab organization page._

## Step by step workflow:

### 1. Exporting dataset:

```bash
npx sanity dataset export <dataset-name> <output-file.tar.gz>
```

**Example:**

```bash
# Export develop dataset to a tar.gz file
npx sanity dataset export develop develop-backup.tar.gz
```

### 2. Cleaning the dataset we need to change:

```bash
npx sanity dataset delete <dataset-name>
```

**Example:**

```bash
# Cleaning production dataset to prepare it for a new data upload
# IMPORTANT: before deleting - run an export to have a backup of the dataset
# Check step 1 as a reference
npx sanity dataset export production production-backup.tar.gz
npx sanity dataset delete production
```

### 3. Importing exported data to a Sanity Dataset

```bash
npx sanity dataset import <input-file> <dataset-name>
```

**Example:**

```bash
# Import to production dataset
npx sanity dataset import develop-backup.tar.gz production
```

## Happy-path workflow example:

1. Develop version is tested and everything is correct on UI and inside of Sanity.io content. Only `develop` Sanity.io dataset was changed.
2. Admin-user logs into Sanity via CLI: `npx sanity login`
3. Exporting develop dataset: `npx sanity dataset export develop develop.tar.gz`
4. Exporting production dataset for backup: `npx sanity dataset export production production-backup.tar.gz`
5. Cleaning the production dataset: `npx sanity dataset delete production`
6. Publishing develop dataset to production: `npx sanity dataset import develop-backup.tar.gz production`
