# START HERE

## AI-First Market Research System — Client Setup Guide

Prepared by: Exnulla (Division of Lake Area LLC)
Contact: James Huson · 936-239-1100 · LakeAreaLLC@gmail.com · www.Exnulla.com

---

## Welcome

You have received a professional AI-powered market research system. This guide
walks you through everything you need to know to run it — from setup through
to receiving your finished deliverable.

You do not need to be a software developer. You do not need to touch any code.
If you can copy and paste text and attach a file to a message, you can run
this system.

**What you received:**

- `server-market-deterministic-agentic-model.zip` — the research engine (you
  never need to open this; it is for the AI)
- This instructions package

**What you will need:**

- Claude Pro subscription (claude.ai — approximately $20/month)
- Perplexity Pro subscription (perplexity.ai — approximately $20/month)
- Grok Premium subscription (grok.com — approximately $30/month)
- ChatGPT Plus subscription (chat.openai.com — approximately $20/month)

All four are required. Each plays a specific role that the others cannot
replace. Total monthly cost: approximately $90.

**What you will produce:**
A professional, evidence-backed research brief as a formatted PDF, plus a
complete organized archive of all research data, sources, and working files.

---

## READ FIRST — Important Notices

### On data security

Before you put any internal company data into these tools, read the file:
`DATA-SECURITY-NOTICE.md`

This document explains in plain language what risks you are taking when
feeding proprietary information to AI services, and how to manage those risks.
It is the most important document in this package.

### On your deliverable

The final PDF you receive will contain placeholder blocks marked
`[IP-INSERT: ...]` wherever internal company data would improve the output.
These are intentional. They show you exactly where your internal data belongs.
You can fill them in manually in the PDF, or ask the system to incorporate
your data in a follow-up research run.

---

## THE FOUR TOOLS AND WHAT EACH ONE DOES

Think of this like a small research firm where each person has a specific job:

| Tool               | Role               | What it does for you                                                                                                                         |
| ------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Perplexity Pro** | Senior Researcher  | Searches the web for published data, analyst reports, and regulatory documents. Cites every source.                                          |
| **Grok**           | Field Intelligence | Searches live social media, Reddit, and current news for what practitioners are actually saying right now.                                   |
| **Claude**         | Lead Analyst       | Reads everything the researchers found, synthesizes it, identifies contradictions, and builds your strategy brief. This is your project hub. |
| **ChatGPT**        | Editor             | Takes Claude's analysis and compiles it into a clean, polished final document.                                                               |

You are the **Project Director**. You decide what to research, you move the
work between tools, and you review the output at the end.

---

## STEP-BY-STEP SETUP

### Step 1 — Set up your Claude Project (15 minutes)

Claude is the hub of the entire system. Everything comes back here.

1. Go to claude.ai
2. In the left sidebar, click **Projects** → **+ New Project**
3. Name the project exactly: `[YOUR COMPANY]-market-research`
   (example: `dell-server-market-research`)
4. Click on the project to open it
5. Find **Project Instructions** — it may appear as a gear icon or settings
   panel on the left side of the project view
6. Open the file `CLAUDE-PROJECT-INSTRUCTIONS.md` from this package
7. Copy the entire contents and paste it into the Project Instructions field
8. Edit the two lines marked `[FILL IN]` with your name and your company name
9. Save

You do not upload the `.zip` file here yet. That happens in your first prompt.

### Step 2 — Set up Perplexity (10 minutes)

Perplexity is where your market research begins.

1. Go to perplexity.ai and sign in to your Pro account
2. Click **Spaces** in the left navigation
3. Click **+ New Space**
4. Name it: `[your-project-name]-research`
   (example: `dell-server-research`)
5. Open the file `PERPLEXITY-SETUP.md` from this package
6. Follow the instructions inside — it will tell you exactly what to paste
   into the Space settings

### Step 3 — Set up Grok (5 minutes)

Grok does not have a formal project system. Setup is simpler.

1. Go to grok.com and sign in
2. No project creation needed — you will use a fresh chat each time
3. Open the file `GROK-SETUP.md` — it contains your ready-to-use prompts
   for each research session

### Step 4 — Set up ChatGPT (10 minutes)

ChatGPT handles the final compilation and polishing of your brief.

1. Go to chat.openai.com and sign in to your Plus account
2. In the left sidebar, click **Projects** → **+ New project**
3. Name it: `[your-project-name]-compiler`
   (example: `dell-server-compiler`)
4. Open the file `CHATGPT-SETUP.md` from this package
5. Follow the instructions inside

---

## HOW A RESEARCH RUN WORKS

Once everything is set up, here is the complete workflow for one research run.
The whole process takes 2-4 hours of your active time, spread across one or
two days.

### Phase 1 — Start your Claude session (5 minutes)

1. Open your Claude project
2. Open the file `FIRST-PROMPT-TEMPLATE.md`
3. Fill in the blanks (your name, the research target, the deadline)
4. Attach the `.zip` file to the message
5. Send it
6. Claude will confirm it has unpacked and read the system files and is ready

### Phase 2 — Research collection (60-90 minutes)

Claude will give you specific prompts to run in Perplexity and Grok.

For each prompt:

1. Go to the named tool (Perplexity or Grok)
2. Paste the prompt exactly as Claude gives it to you
3. Wait for the full response
4. Copy the entire response
5. Open a plain text editor (Notepad on Windows, TextEdit on Mac)
6. Paste the response and save the file as a `.txt` file
   (example: `perplexity-output-1.txt`)
7. Come back to your Claude project
8. Upload the `.txt` file using the file attachment button in the chat

Repeat for each research prompt Claude gives you.

### Phase 3 — Analysis and brief (30-60 minutes)

Once all research files are uploaded, Claude analyzes everything and builds
your strategy brief. It will ask you questions at key decision points.
Answer them in plain language — you do not need technical vocabulary.

### Phase 4 — Final compilation (15 minutes)

Claude will give you a formatted document to take to ChatGPT for final
polishing. Instructions for this step are in `CHATGPT-SETUP.md`.

### Phase 5 — Your deliverables (5 minutes)

Ask Claude: _"Please build my final PDF and my project archive."_

Claude will produce:

- A professional formatted PDF of your research brief
- A organized `.zip` file containing all research data, sources, and working
  files, named with the date and project name

You are done.

---

## INTRODUCING YOURSELF TO THE SYSTEM

The first time you run the system, and at the start of every new session,
you introduce yourself. The system is designed to remember the project context
but not personal details between sessions.

Your introduction tells the system who you are, what you are researching, and
what you need. A template is provided in `FIRST-PROMPT-TEMPLATE.md`.

The more clearly you describe what you need, the better the output. You do not
need special language — describe your research target the same way you would
explain it to a smart colleague who is new to your industry.

---

## WHAT TO DO WHEN SOMETHING GOES WRONG

**Claude seems confused or off-track:**
Say: _"Please stop. Re-read the project instructions and the `.zip` file I
uploaded at the start of this session. Then tell me where we are and what
the next step is."_

**A research output looks wrong or incomplete:**
Say: _"This output for [section name] looks incomplete. What specifically is
missing? Do you need me to run another research prompt?"_

**You are not sure what to do next:**
Say: _"I'm not sure what to do next. Please give me the next step as a single
clear instruction."_

**You need to pick up where you left off:**
Say: _"I'm returning to this project. Here is where we left off:
[describe the last thing that happened]. What is the next step?"_

---

## CONTACT AND SUPPORT

Prepared and maintained by:

James Huson
Exnulla (Division of Lake Area LLC)
174 Holiday Lane, Livingston TX 77351
Phone: 936-239-1100
Email: LakeAreaLLC@gmail.com
Website: www.Exnulla.com
