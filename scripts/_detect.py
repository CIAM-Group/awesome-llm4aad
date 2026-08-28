import glob, os, re
import pdfplumber

root = r"C:\Users\16526\Desktop\1-LLM\awesome-llm4ahd\my_papers"
files = sorted(glob.glob(os.path.join(root, "*.pdf")))

# candidate problem phrases (lowercase substrings to detect)
candidates = [
    "traveling salesman", "tsp",
    "vehicle routing", "vrp", "capacitated vehicle routing", "cvrp",
    "bin packing", "bpp", "online bin packing", "obp",
    "knapsack", "kp",
    "orienteering", "op",
    "flow shop", "fssp", "job shop", "jsp",
    "circle packing",
    "prism",
    "cap set",
    "matrix multiplication", "mm",
    "lunar lander", "car racing",
    "black-box optimization", "black box optimization",
    "scheduling",
    "makespan",
]

for f in files:
    name = os.path.basename(f)
    print("=" * 70)
    print("FILE:", name)
    print("=" * 70)
    try:
        with pdfplumber.open(f) as pdf:
            full = []
            for pg in pdf.pages:
                full.append(pg.extract_text() or "")
            text = "\n".join(full).lower()
            found = {}
            for cand in candidates:
                # count occurrences, avoid double counting 'op' inside words by using wordish boundaries for short tokens
                if cand in ("op", "kp", "mm"):
                    pat = r"\b" + re.escape(cand) + r"\b"
                    cnt = len(re.findall(pat, text))
                else:
                    cnt = text.count(cand)
                if cnt > 0:
                    found[cand] = cnt
            for k, v in sorted(found.items(), key=lambda x: -x[1]):
                print(f"  {k!r}: {v}")
    except Exception as e:
        print("ERROR:", e)
    print()
