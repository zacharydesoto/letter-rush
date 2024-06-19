# import csv
# from nltk.corpus import brown
# from nltk import FreqDist
# import time

from wordfreq import zipf_frequency

def get_word_frequency(word):
    frequency = zipf_frequency(word, lang='en', wordlist='best')
    return frequency

# def main():
#     start_time = time.time()
#     get_word_frequency('jonk')
#     end_time = time.time()
#
#     execution_time = (end_time - start_time)
#     print(f'Execution time: {execution_time:.8f} seconds')
# def word_freq_dict():
#     frequency_dict = {}
#     for word in iter_wordlist(lang='en'):
#         frequency_dict[word] = zipf_frequency(word, lang='en')
#     print(f'length of dict: {len(frequency_dict)}')
#
#     for word in ['the', 'word', 'frequency', 'zipf', 'andersonmeatpackers']:
#         print(f'{word}: {frequency_dict[word]}')
#
# def nltk_stuff():
#     # nltk.download('brown')
#     # nltk.download('words')
#
#     words = brown.words()
#     frequency_distribution = FreqDist(words)
#
#     print(f'len: {frequency_distribution.most_common(10)}')
#
# def csv_file_stuff(word: str):
#     found_word = False
#     with open('./data/unigram_freq.csv', 'r', newline='') as csvfile:
#         csvreader = csv.reader(csvfile, delimiter=',')
#         for row in csvreader:
#             if row[0] == word:
#                 print(f'Found word {word} with frequency {row[1]}')
#                 found_word = True
#                 break
#     if not found_word:
#         print(f'Word {word} not found')
#
# def sort_words():
#     words = [[]]
#     with open('./data/unigram_freq.csv', 'r', newline='') as csvfile:
#         csvreader = csv.reader(csvfile, delimiter=',')
#         for row in csvreader:
#             words.append(row)
#     words.sort()
#     print(words[0:10])
#
#     with open('./data/sorted_freqs.csv', 'w', newline='') as csvfile:
#         writer = csv.writer(csvfile, delimiter=',')
#         writer.writerows(words)
#
# if __name__ == '__main__':
#     common_words = ['the', 'to', 'and', 'of', 'a', 'in', 'i', 'is', 'for', 'that', 'you', 'it', 'on', 'with', 'this',
#                     'was', 'be', 'as', 'are', 'have', 'at', 'he', 'not', 'by', 'but', 'from', 'my', 'or', 'we', 'an',
#                     'your', 'all', 'so', 'his', 'they', 'me', 'if', 'one', 'can', 'will', 'just', 'like', 'about', 'up',
#                     'out', 'what', 'has', 'when', 'more', 'do', 'no', 'were', 'who', 'had', "it's", 'their', 'there',
#                     'her', 'which', 'time', 'get', 'been', 'would', 'she', 'new', 'people', 'how', "don't", 'some',
#                     'also', 'them', 'now', 'other', "i'm", 'its', 'our', 'than', 'good', 'only', 'after', 'first',
#                     'him', 'into', 'know', 'see', 'two', 'make', 'over', 'think', 'any', 'then', 'could', 'back',
#                     'these', 'us', 'want', 'because', 'go', 'well', 'said', 'way', '1', '2', 'most', 'much', 'very',
#                     'where', 'even', 'should',
#                     'may', 'here', 'need', 'really', 'did', 'right', 'work', 'year', 'years', 'being', 'day', 'too',
#                     'going', 'before', 'off', 'why', 'made', 'still', 'take', '3', 'got', 'many', 'never', 'those',
#                     'life',
#                     'say', 'world', 'down', 'great', 'through', "you're", 'last', 's', "that's", 'while', 'best',
#                     'such', 'love', 'man', 'home', 'long', 'look', 'something', 'use', "can't", 'same', 'used', 'both',
#                     'every']
#
#     main()

