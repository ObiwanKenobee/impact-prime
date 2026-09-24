# Atlas Sanctum — Verification + Pricing Layer

> **Turn impact claims into verified, scored, and transparently valued units.**

The **Atlas Sanctum Verification + Pricing Layer** is the thin vertical slice at the center of an emerging impact economy.

Its purpose is deliberately narrow:

```text
IMPACT CLAIM
     ↓
DATA INGESTION
     ↓
VERIFICATION
     ↓
CONFIDENCE
     ↓
IMPACT UNIT
     ↓
PRICING
     ↓
MARKET VISIBILITY
```

The product is designed as a foundation for a future market in verified real-world outcomes.

A useful mental model is:

> **A Bloomberg-style intelligence terminal for real-world impact assets.**

The MVP does not attempt to build a complete financial exchange.

It proves the critical chain:

**claim → evidence → verification → standardized unit → transparent valuation.**

---

# 01 — MVP Goal

Convert real-world impact claims into:

* standardized impact units
* evidence-backed verification scores
* transparent confidence assessments
* dynamic indicative pricing
* auditable market data

The system should allow a user to move from:

> **“A project says it helped 50,000 households.”**

to:

> **“38,200 households are currently verified, with 84% verification confidence, and the indicative value of the verified unit is $12.40 per household.”**

Every important number should remain traceable to its evidence and methodology.

---

# 02 — Core Product Thesis

The platform is built around a simple proposition:

```text
CLAIMS WITHOUT VERIFICATION
        ↓
Hard to compare

VERIFIED IMPACT
        ↓
Comparable

COMPARABLE IMPACT
        ↓
Pricable

PRICED IMPACT
        ↓
Potentially financeable
```

The MVP therefore focuses on the **verification and pricing layer** rather than trying to solve the entire impact economy at once.

---

# 03 — Product Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                  IMPACT MARKET                          │
│  Volume · Prices · Confidence · Capital · Projects    │
├─────────────────────────────────────────────────────────┤
│                 VERIFIED IMPACT UNITS                  │
│  Water · Carbon · Education · Health · Infrastructure │
├─────────────────────────────────────────────────────────┤
│                 VERIFICATION ENGINE                    │
│  Evidence · Consistency · Sources · Anomalies         │
├─────────────────────────────────────────────────────────┤
│                    PRICING ENGINE                      │
│  Base Value · Confidence · Region · Demand             │
├─────────────────────────────────────────────────────────┤
│                    DATA LAYER                          │
│  Projects · Evidence · Events · Market Data            │
└─────────────────────────────────────────────────────────┘
```

---

# 04 — The Core Asset: Verified Impact Unit

The primary product object is the **Verified Impact Unit (VIU)**.

A VIU represents a standardized, evidence-backed unit of a real-world outcome.

Examples:

```text
Water Access Unit
Carbon Restoration Unit
Education Completion Unit
Health Outcome Unit
Infrastructure Resilience Unit
```

A VIU should carry both the impact claim and its verification context.

### Example

```text
Nairobi Clean Water Initiative

Claimed Outcome
50,000 households served

Verified Outcome
38,200 households confirmed

Confidence
84%

Grade
B+

Status
VERIFIED

Last Verification
24 Sep 2026 · 14:32 EAT

Indicative Value
$12.40 / household
```

The verified number should never silently replace the original claim.

Both remain part of the record.

---

# 05 — Core Dashboard

## `ImpactMarketOverview`

The main dashboard provides a live snapshot of the impact economy.

### Market-level metrics

```text
Total Verified Impact Volume
Today / Week / Month

Active Projects Under Verification

Total Impact Capital Flowed

Average Verification Confidence

Verified Units Issued

Assets Under Review
```

Example:

```text
VERIFIED IMPACT VOLUME
1.84M units

+12.7% this week
```

```text
ACTIVE VERIFICATION
142 projects
```

```text
IMPACT CAPITAL
$28.4M
```

```text
AVERAGE CONFIDENCE
87.3%
```

---

# 06 — Market Ticker

The dashboard should adopt selected visual patterns from financial terminals without pretending that impact assets behave identically to conventional securities.

Example:

```text
WATER / KENYA      $12.40   ↑ 4.2%
CARBON / EAST AFRICA  $18.90 ↑ 2.7%
EDUCATION / NAIROBI  $45.00  → 0.4%
```

The ticker communicates:

* indicative price
* recent movement
* category
* geography
* confidence state

Prices should clearly be labeled **indicative**, **reference**, or **market-derived** depending on the underlying mechanism.

---

# 07 — Regional Impact Heatmap

The first geographic layer focuses on Kenya.

Regions are visualized according to:

```text
Verification Coverage
Impact Volume
Capital Flow
Project Density
Risk
```

The map can use semantic states:

```text
✓ Verified
⚠ Partial
! Flagged / Unverified
```

Selecting a region reveals:

```text
Projects
Verified Units
Capital Flow
Average Confidence
Indicative Prices
Top Impact Categories
```

The map provides market context without becoming a decorative GIS layer.

---

# 08 — Impact Asset Feed

## `ImpactAssetFeed`

This is the operational heart of the product.

Each row represents a VIU or a project-backed impact record.

### Example table

| Project                        | Category  |  Claimed | Verified | Confidence | Grade | Status   | Updated |
| ------------------------------ | --------- | -------: | -------: | ---------: | ----- | -------- | ------- |
| Nairobi Clean Water Initiative | Water     |   50,000 |   38,200 |        84% | B+    | Verified | 14:32   |
| Rift Restoration Program       | Carbon    | 80,000 t | 66,400 t |        91% | A-    | Verified | 13:18   |
| Community Schools Upgrade      | Education |   12,000 |    9,840 |        79% | B     | Review   | 11:06   |

The feed should support:

* filtering
* sorting
* confidence thresholds
* category filters
* geography
* verification status
* time range
* price range

---

# 09 — Verification Engine

## `VerificationEngine`

The verification engine turns raw claims into structured confidence.

It combines:

```text
Source Reliability
       +
Data Consistency
       +
External Signal Match
       +
Historical Pattern Match
       +
Corroboration
       +
Anomaly Detection
       +
Human Review
```

The result is a confidence assessment.

---

# 10 — AI Verification Scorecard

## `VerificationScorecard`

Each project receives a transparent score breakdown.

Example:

```text
VERIFICATION SCORE

Data Consistency
█████████████████░ 88

External Signal Match
████████████████░░ 82

Historical Pattern Match
███████████████░░░ 76

Anomaly Risk
██████████████████ 92

Source Reliability
█████████████████░ 89

──────────────────────

FINAL CONFIDENCE
84 / 100
```

The platform should make clear whether each score is:

* directly measured
* model-derived
* rule-based
* human-reviewed

---

# 11 — Verification Factors

## Data Consistency

Checks for contradictions within the submitted evidence.

Examples:

```text
Reported beneficiaries
vs
field records

Reported production
vs
sensor telemetry

Reported restoration area
vs
geospatial observations
```

---

## External Signal Match

Where available, compare claims against:

```text
Satellite observations
IoT sensors
Administrative data
Field reports
Independent datasets
```

---

## Historical Pattern Match

Compare current claims with:

* similar projects
* historical performance
* expected intervention ranges
* previous reporting periods

This is a screening signal, not proof of fraud or validity.

---

## Anomaly Risk

Identify unusual patterns such as:

* sudden unexplained jumps
* duplicate records
* inconsistent timestamps
* abnormal spatial distributions
* improbable output ratios

The system should flag anomalies for review rather than declaring that an irregularity is fraud.

---

# 12 — Source Transparency

## `DataSourceTransparency`

Users should always be able to see what evidence influenced the verification.

Example:

```text
DATA SOURCES

✓ NGO Field Reports
Reliability: High
Updated: 2h ago

✓ Satellite Imagery
Reliability: High
Updated: 6h ago

⚠ Community Survey
Reliability: Medium
Updated: 4d ago

✓ Sensor Telemetry
Reliability: High
Updated: 18m ago
```

The interface should also identify conflicts.

```text
⚠ SOURCE CONFLICT

Field reports:
38,200 households

Project submission:
50,000 households

Difference:
11,800
```

This is where trust becomes visible.

---

# 13 — Evidence Drawer

Every verified unit should provide an evidence trail.

## `EvidenceDrawer`

```text
SOURCE
METHOD
COLLECTION DATE
TRANSFORMATION
VERIFICATION EVENT
KNOWN LIMITATIONS
AUDIT HISTORY
```

Example:

```text
CARBON RESTORATION UNIT

Evidence:
Satellite biomass estimate
Field calibration
Project registry
Community survey

Methodology:
Carbon Model v2.4

Last reviewed:
24 Sep 2026

Known limitation:
Field sampling coverage is incomplete
in 8% of the project area.
```

---

# 14 — Verification Status Model

Every project should have a clear state.

```text
UNSUBMITTED
UNDER REVIEW
PARTIALLY VERIFIED
VERIFIED
FLAGGED
DISPUTED
SUPERSEDED
REJECTED
```

The UI should never use a single "approved" state to conceal a complex evidence history.

---

# 15 — Impact Grades

A simple impact grade can summarize the verification profile.

Example:

```text
A
A-
B+
B
B-
C
D
```

But the grade must remain a summary layer.

Users should always be able to drill into the components behind it.

Example:

```text
GRADE B+

Confidence             84%
Evidence Coverage      81%
Data Quality           87%
Independent Validation 72%
Anomaly Risk           Low
```

---

# 16 — Pricing Engine

## `ImpactPricingEngine`

Once an impact unit reaches the required verification threshold, the pricing layer calculates an **indicative impact value**.

Initial formula:

```text
Price
=
Base Impact Value
×
Verification Confidence
×
Regional Multiplier
×
Demand Factor
```

Example:

```text
Base Water Unit
$15.00

Confidence
0.84

Regional Multiplier
1.10

Demand Factor
0.90

Indicative Price
$12.47
```

The precise mechanics should remain configurable.

---

# 17 — Example Impact Prices

```text
Water Access Unit
$12.40 / household served

Carbon Restoration Unit
$18.90 / tCO₂e

Education Completion Unit
$45 / student
```

These values should be represented as:

```text
Indicative
Reference
Modelled
Quoted
Market-derived
```

depending on the actual market mechanism.

The system should never imply that a model-generated number is automatically an executable market price.

---

# 18 — Pricing Inputs

The pricing engine can consider:

```text
Verification Confidence
Regional Conditions
Historical Outcome Performance
Demand Pressure
Supply
Impact Category
Scarcity
Durability
Market Activity
```

Future models may introduce:

```text
Permanence
Additionality
Liquidity
Counterparty Risk
Policy Changes
Climate Risk
```

---

# 19 — Price Movement

## `PriceChart`

Each impact category can expose:

```text
24H
7D
30D
90D
1Y
```

Example:

```text
PRICE

$20 ┤                        ╭──
    │                    ╭───╯
$18 ┤              ╭─────╯
    │         ╭────╯
$16 ┤─────────╯
    └─────────────────────────
      Mon Tue Wed Thu Fri
```

The chart should distinguish:

```text
Observed
Reference
Modelled
```

where applicable.

---

# 20 — Market Signals

The pricing panel can expose:

```text
Demand
Supply
Volume
Volatility
Confidence
```

Example:

```text
WATER IMPACT

Demand Pressure
██████████████░░ 72%

Available Verified Supply
████████░░░░░░░░ 41%

Confidence
87%

Volatility
Moderate
```

The platform should not manufacture a financial-market aesthetic where actual liquidity or trading activity does not exist.

---

# 21 — Project Detail Page

Selecting a project opens the full asset intelligence view.

```text
PROJECT OVERVIEW
VERIFICATION
PRICING
RISK
EVIDENCE
AUDIT
```

---

# 22 — Outcome Summary

## `OutcomeSummary`

Show:

```text
PROMISED
DELIVERED
VERIFIED
GAP
```

Example:

```text
Nairobi Clean Water Initiative

Promised
50,000 households

Reported
46,700 households

Verified
38,200 households

Verification Gap
-11,800
```

This gives the user an immediate understanding of the claim-versus-evidence relationship.

---

# 23 — Verification Breakdown

Show the reasoning behind the confidence score.

```text
DATA CONSISTENCY       88
EXTERNAL MATCH         82
HISTORICAL MATCH       76
SOURCE RELIABILITY     89
ANOMALY RISK           LOW
```

A narrative summary can say:

> **The project is strongly supported by field reports and satellite observations, but beneficiary records cover only 81% of the reported area.**

This explanation should be generated from actual model inputs.

---

# 24 — Pricing History

## `PricingHistory`

Show:

```text
Current Indicative Price
Historical Range
Price Change
Volume
Demand
Confidence
```

Example:

```text
$12.40

30D Change
+8.6%

High
$13.10

Low
$10.80
```

---

# 25 — Risk Flags

## `RiskFlags`

Potential flags:

```text
Data Inconsistency
Missing Evidence
Stale Verification
Low Source Diversity
Anomaly Detected
Verification Coverage Gap
Pricing Sensitivity
Model Uncertainty
```

Example:

```text
⚠ FIELD DATA COVERAGE GAP

9% of the project area lacks
recent independent observations.

Impact:
Moderate

Review:
Recommended
```

---

# 26 — Audit History

Every significant change should remain visible.

```text
09:14
Project submitted

10:02
Satellite evidence ingested

11:26
Verification confidence updated

12:10
Independent evidence attached

13:42
Human reviewer approved verification

14:05
Indicative price recalculated
```

This history becomes part of the asset's provenance.

---

# 27 — Impact Market Map

## `ImpactMarketMap`

The optional map becomes especially valuable when the asset layer expands.

Display:

```text
Project Density
Verified Impact
Capital Flow
Average Price
Risk
Verification Coverage
```

Selecting a region:

```text
NAIROBI

Verified Projects
42

Verified Units
284K

Capital Flow
$12.4M

Avg Confidence
87%

Water Unit Price
$12.40
```

---

# 28 — Capital Flow Visualization

A future Sankey-style view can show:

```text
CAPITAL
   ↓
REGION
   ↓
PROJECT
   ↓
IMPACT CATEGORY
   ↓
VERIFIED UNITS
```

Example:

```text
$28.4M Capital
      │
      ├── Water      $10.2M
      ├── Carbon      $8.7M
      ├── Education   $5.1M
      └── Health      $4.4M
```

The visualization should remain grounded in actual recorded transactions or commitments.

---

# 29 — MVP User Flow

The primary vertical slice is:

```text
USER
  ↓
SUBMITS PROJECT
  ↓
SYSTEM INGESTS EVIDENCE
  ↓
VERIFICATION ENGINE
  ↓
CONFIDENCE SCORE
  ↓
VERIFIED IMPACT UNIT
  ↓
PRICING ENGINE
  ↓
MARKET DASHBOARD
  ↓
USER COMPARES ASSETS
```

That is the core product.

Everything else supports this loop.

---

# 30 — Backend Architecture

A minimal backend can be organized into four layers.

```text
┌─────────────────────────────────────┐
│              API LAYER              │
│ Projects · Verify · Price · Market  │
├─────────────────────────────────────┤
│          DOMAIN SERVICES            │
│ Verification · Pricing · Projects   │
├─────────────────────────────────────┤
│            DATA LAYER               │
│ PostgreSQL · Object Storage         │
├─────────────────────────────────────┤
│          EVENT PROCESSING           │
│ Queue · Jobs · Audit Events         │
└─────────────────────────────────────┘
```

---

# 31 — Data Layer

Recommended:

```text
PostgreSQL
```

for structured data.

```text
S3-compatible object storage
```

for documents, images, and evidence files.

```text
Redis / lightweight queue
```

for asynchronous processing.

---

# 32 — Core Domain Model

The MVP can revolve around:

```text
Project
ImpactClaim
ImpactUnit
Evidence
VerificationRun
VerificationEvent
DataSource
PriceQuote
PriceHistory
MarketSnapshot
RiskFlag
AuditLog
```

---

# 33 — Project Model

```ts
interface ImpactProject {
  id: string;
  name: string;

  category:
    | "water"
    | "carbon"
    | "education"
    | "health"
    | "infrastructure";

  geography: string;

  claimedOutcome: {
    quantity: number;
    unit: string;
  };

  status:
    | "submitted"
    | "under_review"
    | "verified"
    | "flagged"
    | "disputed";
}
```

---

# 34 — Verification Model

```ts
interface VerificationResult {
  projectId: string;

  dataConsistency: number;
  externalSignalMatch: number;
  historicalPatternMatch: number;
  sourceReliability: number;
  anomalyRisk: number;

  machineConfidence: number;
  humanReviewedConfidence?: number;

  grade:
    | "A"
    | "A-"
    | "B+"
    | "B"
    | "B-"
    | "C"
    | "D";

  methodologyVersion: string;

  generatedAt: string;
}
```

---

# 35 — Price Model

```ts
interface ImpactPrice {
  impactUnitId: string;

  baseValue: number;
  verificationConfidence: number;
  regionalMultiplier: number;
  demandFactor: number;

  indicativePrice: number;

  currency: string;

  methodologyVersion: string;

  createdAt: string;
}
```

---

# 36 — Core Database Tables

A first schema can include:

```text
projects
impact_claims
impact_units
evidences
data_sources
verification_runs
verification_events
risk_flags
price_quotes
price_history
market_snapshots
audit_logs
```

---

# 37 — API

The MVP requires a small, versioned REST API.

```text
/api/v1/projects
/api/v1/verify
/api/v1/price
/api/v1/market-summary
```

Recommended extended endpoints:

```text
GET  /projects
POST /projects
GET  /projects/:id
GET  /projects/:id/verification
GET  /projects/:id/pricing
GET  /projects/:id/evidence
GET  /projects/:id/audit

POST /verify
POST /verify/:projectId/review

GET  /price/:impactUnitId
GET  /price/:impactUnitId/history

GET /market-summary
GET /market-summary/regions
GET /market-summary/categories
```

---

# 38 — API Response Contract

Use a predictable envelope.

```json
{
  "data": {},
  "meta": {
    "request_id": "uuid",
    "timestamp": "ISO8601"
  },
  "error": null
}
```

All validation and processing errors should remain explicit.

---

# 39 — Frontend Architecture

Recommended stack:

```text
React
TypeScript
Next.js / Vite
Tailwind CSS
TanStack Query
Zustand
ECharts / Recharts
MapLibre
Zod
```

Suggested structure:

```text
src/
├── components/
│   ├── market/
│   ├── verification/
│   ├── pricing/
│   ├── projects/
│   ├── map/
│   └── shared/
│
├── features/
│   ├── project-submission/
│   ├── verification/
│   ├── impact-assets/
│   ├── pricing/
│   └── market-overview/
│
├── data/
├── types/
├── services/
├── hooks/
└── utils/
```

---

# 40 — Core Frontend Components

```text
MarketOverview
MarketTicker
ImpactAssetTable
ImpactAssetCard

VerificationScorecard
EvidencePanel
SourceTransparency
ConfidenceGauge
RiskFlags

PriceGenerator
PriceMovementChart
DemandIndicator
SupplyIndicator

ProjectDetail
OutcomeSummary
VerificationBreakdown
PricingHistory
AuditTimeline

ImpactMarketMap
RegionPanel
FilterBar
```

---

# 41 — Visual Design

The interface should feel like a fusion of:

```text
Bloomberg Terminal
+
Climate Intelligence Platform
+
Scientific Evidence Console
+
Institutional Investment Dashboard
```

Visual characteristics:

* dark premium surfaces
* crisp typography
* restrained accent color
* dense information hierarchy
* small but meaningful motion
* strong table design
* high signal-to-noise ratio

The product should feel serious rather than futuristic for its own sake.

---

# 42 — Semantic Color System

Suggested states:

```text
Green
Verified / healthy

Amber
Review / partial confidence

Red
Flagged / material risk

Blue
Information / neutral intelligence

Gray
Unavailable / insufficient evidence
```

Never communicate verification status through color alone.

Use labels:

```text
✓ VERIFIED
⚠ REVIEW
! FLAGGED
— NO DATA
```

---

# 43 — Data States

The frontend must handle:

```text
Loading
Empty
Pending Verification
Partial Evidence
Stale Data
Low Confidence
Pricing Unavailable
API Error
```

Example:

```text
PRICE UNAVAILABLE

This impact unit has not yet reached
the minimum verification threshold.

Required:
80% confidence

Current:
67%
```

---

# 44 — Trust by Design

The most important interface principle is:

> **Every number should have a story behind it.**

For each major value, the user should be able to ask:

```text
Where did this come from?
When was it measured?
Who verified it?
What methodology was used?
What is uncertain?
What would cause it to change?
```

The product should make those answers accessible.

---

# 45 — Pricing Integrity

Pricing should never become a black box.

A user should be able to inspect:

```text
Base Value
Confidence
Regional Factor
Demand Factor
Data Freshness
Methodology
Sensitivity
```

Example:

```text
INDICATIVE PRICE
$12.40

BASE VALUE
$15.00

CONFIDENCE
0.84

REGIONAL FACTOR
1.10

DEMAND
0.90

SENSITIVITY
± $1.20
```

This keeps the pricing layer interpretable.

---

# 46 — What This MVP Is

The MVP is:

```text
A verification engine
+
An impact-unit standard
+
A transparent pricing model
+
A market-intelligence interface
```

It is intentionally small.

---

# 47 — What This MVP Is Not

It is not initially:

```text
A full exchange
A securities marketplace
A universal ESG rating system
A replacement for independent auditors
A guarantee of financial returns
A fully autonomous impact verification authority
```

Those are future problems.

First prove the verification-to-pricing pipeline.

---

# 48 — MVP Success Criteria

The MVP succeeds when it demonstrates that:

### Impact can be standardized

Claims can be expressed as structured units.

### Impact can be verified

Evidence can generate transparent confidence assessments.

### Impact can be compared

Users can inspect multiple projects using common dimensions.

### Impact can be valued

The system can generate an explainable indicative value.

### Impact can become market-visible

Verified units can be displayed as structured economic objects.

That is the thin vertical slice.

---

# 49 — The Vertical Slice

```text
PROJECT
  ↓
CLAIM
  ↓
EVIDENCE
  ↓
VERIFICATION
  ↓
CONFIDENCE
  ↓
VERIFIED IMPACT UNIT
  ↓
PRICING
  ↓
MARKET FEED
  ↓
COMPARISON
```

A complete demo should be able to execute that loop from beginning to end.

---

# 50 — Example End-to-End Asset

```text
PROJECT

Nairobi Clean Water Initiative

──────────────────────────────────

CLAIMED
50,000 households served

VERIFIED
38,200 households

CONFIDENCE
84%

GRADE
B+

──────────────────────────────────

EVIDENCE
✓ Field reports
✓ Satellite observations
✓ Sensor data
⚠ Community records partially complete

──────────────────────────────────

INDICATIVE VALUE

$12.40 / verified household

30D
↑ 8.6%

──────────────────────────────────

STATUS

VERIFIED
```

This single object demonstrates the thesis of the entire MVP.

---

# 51 — Future Evolution

Once the verification + pricing layer is proven, Atlas Sanctum can expand toward:

```text
Portfolio Analytics
Impact Asset Registry
Institutional APIs
Independent Auditor Network
Project Financing
Risk-Adjusted Impact Valuation
Secondary Markets
Impact Derivatives
Regenerative Finance
Global Impact Indexes
```

Each layer should build on the same evidence and provenance foundation.

---

# 52 — The Big Idea

Most impact systems stop here:

```text
"We achieved 50,000 outcomes."
```

Atlas Sanctum asks:

```text
How many were actually verified?

How strong is the evidence?

How comparable is the outcome?

What is it worth?

How stable is that value?

Who is willing to fund it?

What happens next?
```

The product therefore turns impact from a reporting artifact into a structured economic object.

---

# 53 — Final Architecture

```text
                         REAL WORLD
                             │
                             ↓
                      IMPACT PROJECT
                             │
                             ↓
                       IMPACT CLAIM
                             │
                   ┌─────────┴─────────┐
                   ↓                   ↓
                EVIDENCE            SOURCES
                   │                   │
                   └─────────┬─────────┘
                             ↓
                    VERIFICATION ENGINE
                             │
                    ┌────────┴────────┐
                    ↓                 ↓
               CONFIDENCE          RISK
                    │                 │
                    └────────┬────────┘
                             ↓
                    VERIFIED IMPACT UNIT
                             │
                             ↓
                      PRICING ENGINE
                             │
                    ┌────────┴────────┐
                    ↓                 ↓
                  PRICE            HISTORY
                    │                 │
                    └────────┬────────┘
                             ↓
                      IMPACT MARKET
                             │
                             ↓
                  CAPITAL + COMPARISON
```

---

# Atlas Sanctum

## **From impact claims to priced, verified units.**

The Verification + Pricing Layer is intentionally narrow.

It does not attempt to solve the entire impact economy.

It proves one critical proposition:

> **Real-world outcomes can be transformed from claims into structured, evidence-backed, transparent economic units.**

That is the foundation.

Once that foundation exists, the rest of the impact economy has somewhere to stand.

> **Verify the outcome. Price the evidence. Make impact legible.**
