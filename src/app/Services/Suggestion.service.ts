import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SuggestionService {
    
    constructor(){ }

    findClosestStrings(target:string , array:string[], topN = 4) {
      
        const distances = array.map(str => ({
            string: str,
            distance: this.levenshteinDistance(target, str)
        }));
    
        distances.sort((a, b) => a.distance - b.distance);
        const closestStrings = distances.slice(0, topN).map(item => item.string);
      
        return closestStrings;
    }
    
    levenshteinDistance(s1:string, s2:string):number {
        const len1 = s1.length;
        const len2 = s2.length;
    
        const matrix = [];
    
        for (let i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }
    
        for (let j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }
    
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, // deletion
                    matrix[i][j - 1] + 1, // insertion
                    matrix[i - 1][j - 1] + cost // substitution
                );
            }
        }
    
        return matrix[len1][len2];
    }
    
  
    


}