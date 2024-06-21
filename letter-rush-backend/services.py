from wordfreq import zipf_frequency
import enchant

def get_word_frequency(word):
    d = enchant.Dict("en_US")
    valid_word = d.check(word.capitalize())
    if valid_word:
        frequency = zipf_frequency(word, lang='en', wordlist='best')
    return frequency if valid_word else 0

# def main():
#     start_time = time.time()
#     frequency = get_word_frequency('stewart')
#     end_time = time.time()
#
#     execution_time = (end_time - start_time)
#     print(f'Frequency: {frequency}')
#     print(f'Execution time: {execution_time:.8f} seconds')
#
#
# if __name__ == '__main__':
#     main()
