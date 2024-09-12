from wordfreq import zipf_frequency
import enchant
import inflect

def get_word_frequency(word):
    d = enchant.Dict("en_US")
    valid_word = d.check(word.capitalize())
    if valid_word:
        singular = get_singular_form(word)
        frequency = zipf_frequency(singular, lang='en', wordlist='best')
    return frequency if valid_word else 0

def get_singular_form(word):
    p = inflect.engine()
    singular = p.singular_noun(word)
    is_plural = singular is not False and singular != word  # There is a singular form which is different from the plural form
    return singular if is_plural else word



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
