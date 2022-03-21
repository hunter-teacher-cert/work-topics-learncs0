import random

articles = ["a", "the", "one", "some"]
nouns = ["apple", "carrot", "rabbit", "banana", "basketball", "chess", "sun", "wind"]
verbs = ["cooks", "blows", "bounces", "walks", "jumps", "calls", "stays", "runs", "abides"]
conjunctions = ["for", "and", "nor", "but", "yet", "so"]
dependent_clause_markers = ["although", "even if", "until", "when", "whether", "while", "in order to"]

def independent_clause():
    return random.choice(articles) + " " + random.choice(nouns) + " " + random.choice(verbs)

def dependent_clause():
    return random.choice(dependent_clause_markers) + " " + independent_clause()

def simple_sentence():
    return independent_clause() + "."

def compound_sentence():
#     # add code here
  return independent_clause() + " " + random.choice(conjunctions) + " " + independent_clause() + "."
def complex_sentence():
#     # add code here
  return dependent_clause() + "," + independent_clause() + "."

def compound_complex_sentence():
#     # add code here
  return dependent_clause() + "," + independent_clause() + " " + random.choice(conjunctions) + " " + independent_clause() + "."

if __name__ == "__main__":
    #test print for simple sentence
    sentence = simple_sentence()
    print(sentence)
    # #test print for compound sentence
    compound_sentence = compound_sentence()
    print(compound_sentence)
    # #test print for complex sentence
    complex_sentence = complex_sentence()
    print(complex_sentence)
    # #test print for compound-complex sentence
    compound_complex_sentence = compound_complex_sentence()
    print(compound_complex_sentence)