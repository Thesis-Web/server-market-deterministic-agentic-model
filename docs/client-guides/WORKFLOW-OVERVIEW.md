# WORKFLOW OVERVIEW
## How the Research System Works — One Page

---

## The complete loop

```
YOU (Project Director)
        │
        ▼
┌─────────────────────────────────────────────────────┐
│  CLAUDE  (Your Research Hub)                        │
│  • Reads the system files from the .zip             │
│  • Gives you research prompts to run                │
│  • Receives and analyzes all research returns       │
│  • Builds your strategy brief                       │
│  • Generates your final PDF                         │
│  • Packages your project archive .zip               │
└──────────────┬──────────────────────────────────────┘
               │ gives you prompts to run
     ┌─────────┼──────────────────┐
     ▼         ▼                  ▼
PERPLEXITY   GROK            CHATGPT
Published    Live signals    Final
market data  from the field  compilation
     │         │                  │
     └─────────┴──────────────────┘
               │
               ▼ you copy output, save as .txt, upload to Claude
┌─────────────────────────────────────────────────────┐
│  CLAUDE  analyzes returns, builds brief              │
└──────────────────────────────────────────────────────┘
               │
               ▼
       Final PDF + Project Archive .zip
               │
               ▼
           YOU receive it
```

---

## What each step takes

| Step | Time | What you do |
|---|---|---|
| Setup (first time only) | 30-45 min | Create projects in all four tools, paste instructions |
| Start a Claude session | 5 min | Upload .zip, send first prompt, introduce yourself |
| Perplexity research | 30-60 min | Run 2-4 prompts, save each response as .txt |
| Grok research | 15-30 min | Run 1-2 prompts, save responses as .txt |
| Return files to Claude | 5 min | Upload the .txt files you saved |
| Claude analysis (wait) | 10-20 min | Claude synthesizes and builds the brief |
| ChatGPT compilation | 10 min | Paste Claude's draft, save the return |
| Final PDF + archive | 5 min | Ask Claude to build deliverables |
| **Total active time** | **~2-3 hours** | |

---

## The golden rule

**You transfer files. The tools do the work.**

Your job is accurate transfer — copy outputs, save them, upload them.
Do not filter, edit, or summarize research outputs before giving them to Claude.
The raw text is what the system needs.

---

## What Claude remembers and what it does not

Claude's project keeps your instructions between sessions, but does not
automatically remember conversation details from previous sessions.

At the start of each session, tell Claude:
- Your name
- What project you are working on
- What was completed in the last session

The `.zip` file acts as Claude's long-term memory of the system structure.
The conversation history gives it the current session context.

---

## Your deliverables at the end of every run

**PDF Brief** — A professionally formatted research document with:
- Executive summary
- Findings by segment and region
- Competitive landscape
- Strategic recommendations
- Evidence sources cited throughout
- IP-INSERT placeholders showing where your internal data fits

**Project Archive (.zip)** — An organized folder containing:
- `/briefs` — Your research brief drafts and final
- `/research-files` — All Perplexity and Grok output files
- `/prompts` — The prompts that were used
- `/logs` — Record of the research run

Named: `YYYY-MM-DD-[company]-[topic]-research-data.zip`

---

## Adding your own internal knowledge

There are two ways to incorporate your internal expertise:

**During the research run (recommended for general context):**
Share your professional knowledge about the market directly in Claude.
Example: *"Based on my experience, I know that the biggest pain point for
our customers is actually X, not Y. Please factor that in."*

**After the PDF is produced (recommended for sensitive internal data):**
The IP-INSERT blocks in the PDF show you exactly where internal data belongs.
Fill these in manually without going through any AI tool. See DATA-SECURITY-NOTICE.md
for guidance on what to share and what to keep offline.

---

## Getting help

If you get stuck at any point, the most reliable thing you can do is
tell Claude plainly what is happening:

*"I'm stuck. Here is what I was trying to do: [describe it].
Here is what happened: [describe it].
What should I do next?"*

Claude is designed to handle this kind of direct, plain-language communication.
You do not need special technical vocabulary to get back on track.

For system support, contact:
James Huson · Exnulla · LakeAreaLLC@gmail.com · 936-239-1100
