# PERPLEXITY PRO — Setup Guide

## Your Research Collection Tool

---

## What Perplexity does in this system

Perplexity is your senior researcher. It searches the web and returns
structured, cited evidence — analyst reports, regulatory documents, vendor
data, and industry publications. Every claim it returns includes a source you
can verify.

You will use Perplexity every time the system needs published market data.
Claude will give you the exact prompts to run.

---

## One-time setup (10 minutes)

### Step 1 — Create your Space

A Space in Perplexity is like a dedicated research folder with its own
instructions. You create one Space per project and reuse it throughout.

1. Log into perplexity.ai with your Pro account
2. In the left sidebar, click **Spaces**
3. Click **+ New Space**
4. Name it after your project, using this format:
   `[company]-[topic]-research`
   Example: `dell-server-research`
5. You can add a short description if you like — it is optional

### Step 2 — Set the Space instructions

Inside your Space, find the **Instructions** field (it may appear in
Space settings or as a prompt box at the top).

Copy the block below and paste it exactly:

---

```
You are a professional market research acquisition agent. Your role is to
find and report published evidence — not to analyze, advise, or recommend.

Rules you must follow:
- Every factual claim must include a source: publication name, author if
  known, date, and URL where available
- Prioritize high-quality sources: analyst firms (IDC, Gartner, Forrester,
  Dell'Oro), regulatory bodies, official vendor documents, financial filings,
  and reputable industry press
- If you cannot find a source for a claim, say so explicitly. Do not invent
  or assume sources.
- If sources conflict with each other, report both versions and note the
  conflict. Do not resolve it.
- If information is unavailable or behind a paywall, say so clearly.
- Structure your output exactly as the prompt requests. Do not add commentary
  or summaries beyond what is asked.
- Mark any inference or interpretation clearly as: [INFERENCE — not sourced]

You are the evidence-gathering layer. Analysis happens elsewhere.
```

---

### Step 3 — Set search mode

When running research prompts, make sure **Pro Search** is active.
This is usually a toggle or button near the prompt box. Pro Search accesses
more sources and produces better-cited results.

### Step 4 — You are ready

That is all the setup required. Your Space is now configured for the session.

---

## How to run a research prompt

When Claude gives you a Perplexity prompt:

1. Open your Perplexity Space (not a regular chat — use your named Space)
2. Make sure Pro Search is active
3. Paste the prompt exactly as Claude wrote it
4. Wait for the full response to load — do not stop it early
5. When it finishes, scroll to the top
6. Select all the text in the response (Ctrl+A or Cmd+A in the response area)
7. Copy it
8. Open a plain text editor:
   - Windows: Notepad (search for it in Start menu)
   - Mac: TextEdit (set it to plain text mode first)
9. Paste the response
10. Save the file with a name like: `perplexity-output-1.txt`
    (use the number to track which run it is)
11. Go back to your Claude project
12. Attach the `.txt` file to your next message

---

## Running multiple prompts

Claude may give you 2-4 prompts to run in Perplexity in sequence.
Run them one at a time, wait for each to complete, and save each response
as a separate numbered file:

- `perplexity-output-1.txt`
- `perplexity-output-2.txt`
- and so on

Upload all of them to Claude when you have finished all prompts for that
research pass.

---

## If Perplexity gives you an unexpected response

If Perplexity returns something that seems very short, very generic,
or clearly incomplete:

1. Try running the prompt again — sometimes searches vary
2. If it continues to return weak results, make a note of it
3. Tell Claude: _"Perplexity returned limited results on [topic].
   Here is what I got."_ and upload what you have
4. Claude will work with what is available and flag the evidence gap

---

## What you do NOT need to do

- You do not need to evaluate or filter the research output yourself
- You do not need to summarize it
- You do not need to format it
- You just need to save it exactly as Perplexity returned it and give it
  to Claude

The raw output is what Claude needs. Your job is accurate transfer, not editing.
